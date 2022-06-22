import './assets/css/App_oumtt.css';
import {useState} from 'react';

function Article(props) {
  return <article>
    <h2>{props.title}</h2>
    {props.body}
  </article>
}

function Header(props) {
  // console.log('props', props.title);
  return <header>
    <h1><a href="/" onClick={(event)=>{
      event.preventDefault();
      props.onChangeMode();
    }}>{props.title}</a></h1>
  </header>
}

function Headers() {
  return <nav>
  <div className="nav_home">
      <a className="oumtt_link" href="/"><div className="nav_active">Main<div className="nav_point"></div></div></a>
      <a className="program_link" href="/program"><div>Program</div></a>
      <a className="nav_home_notion" href="https://jazzy-second-e86.notion.site/We-re-Project-Oumtt-70fd6fa703c045ee940342dedf63b7f1"><div>Oumtt</div></a>
  </div>
  <a href="#contact"><button className="nav_button"></button></a>
  </nav>
}

const oumtt_photo = {
  "oumtt_image": [
    "hasom", "hahyeon", "seoyeon", "minseop", "sohyun", "sohee",
  ],
  "oumtt_team": [
    "Team1", "Team2", "Team3", "Team3", "Team4", "Team5",
  ],
  "oumtt_name": [
    "오하솜", "김하현", "인서연", "김민섭", "배소현", "한소희",
  ],
}

const dancer_photo = {
  "dancer_image": [
    "yochan", "hyunjin", "jonghwan", "dahyun", "yunseo", "youngju",
  ],
  "dancer_role": [
    "Director", "Dancer", "Dancer", "Dancer", "Dancer", "Dancer",
  ],
  "dancer_name": [
    "강요찬", "육현진", "이종환", "김다현", "김윤서", "예영주",
  ],
}

const dancer_image = dancer_photo.dancer_image.map((img, index) =>
  {
    return <img key={index} className="artist_none" alt="~" src={process.env.PUBLIC_URL + '/dancer/' + img + '.png'} />
  }  
)

const oumtt_image = oumtt_photo.oumtt_image.map((img, index) =>
  {
    return <img key={index} className="artist_none" alt="~" src={process.env.PUBLIC_URL + '/oumtt/' + img + '.png'} />
  }  
)

function Photo(props) {
  let Image = () => {
    return (
      <div>
        {dancer_image}
      </div>
    )
  };

  return <div>
    {Image()}
  </div>
} 

function Oumtt(props) {
  let Image = () => {
    return (
      <div>
        {oumtt_image}
      </div>
    )
  };

  return <div>
    {Image()}
  </div>
} 

function Nav(props) {
  const lis = []
  for(let i=0; i<props.topics.length; i++) {
    let t = props.topics[i];
    lis.push(<li key={t.id}>
      <a id={t.id} href={'/read/+t.id'} onClick={event=>{
        event.preventDefault();
        props.onChangeMode(Number(event.target.id));
      }}>{t.title}</a>
      </li>)
  }
  return <nav>
    <ol>
      {lis}
    </ol>
  </nav>
}

function Create(props){
  return <article>
    <h2>Create</h2>
    <form onSubmit={event=>{
      event.preventDefault();
      const title = event.target.title.value;
      const body = event.target.body.value;
      props.onCreate(title, body); 
    }}>
      <p><input type="text" name="title" placeholder="title"/></p>
      <p><textarea name="body" placeholder="body"></textarea></p>
      <p><input type="submit" value="Create"></input></p> 
    </form>
  </article>
}

function Update(props){
  const [title, setTitle] = useState(props.title);
  const [body, setBody] = useState(props.body);
  return <article>
    <h2>Update</h2>
    <form onSubmit={event=>{
      event.preventDefault();
      const title = event.target.title.value;
      const body = event.target.body.value;
      props.onUpdate(title, body); 
    }}>
      <p><input type="text" name="title" placeholder="title" value={title} onChange={event=>{
        console.log(event.target.value);
        setTitle(event.target.value);
      }}/></p>
      <p><textarea name="body" placeholder="body" value={body} onChange={event=>{
        setBody(event.target.value);
      }}></textarea></p>
      <p><input type="submit" value="Update"></input></p> 
    </form>
  </article>
}

function App() {
  // const _mode = useState('WELCOME');
  // const mode = _mode[0];
  // const setMode = _mode[1];
  const [mode, setMode] = useState('WELCOME');
  const [id, setId] = useState(null);
  const [nextId, setNextId] = useState(4);
  const [topics, setTopics] = useState([
    {id:1, title:'html', body:'html is ...'},
    {id:2, title:'css', body:'css is ...'},
    {id:3, title:'javascript', body:'javascript is ...'},
  ])
  let content = null;
  let contextControl = null;
  if(mode === 'WELCOME'){
    content = <Article title="Welcome" body="Hello, WEB"></Article>
  } else if(mode === 'READ'){
    let title, body = null;
    for(let i=0; i<topics.length; i++){
      console.log(topics[i].id, id);
      if(topics[i].id === id) {
        title = topics[i].title;
        body = topics[i].body;
      }
    }
    content = <Article title={title} body={body}></Article>
    contextControl = <>
      <li><a href={'/update/'+id} onClick={event=>{
        event.preventDefault();
        setMode('UPDATE');
      }}>Update</a></li>
      <li><input type="button" value="Delete" onClick={()=>{
        const newTopics = []
        for(let i=0; i<topics.length; i++){
          if(topics[i].id !== id){
            newTopics.push(topics[i]);
          }  
        }
        setTopics(newTopics);
        setMode('WELCOME');
      }} /></li>
    </> 
  } else if(mode === 'CREATE'){
    content = <Create onCreate={(_title, _body)=>{
      const newTopic = {id:nextId, title:_title, body:_body}
      const newTopics = [...topics]
      newTopics.push(newTopic);
      setTopics(newTopics);
      setMode('READ');
      setId(nextId);
      setNextId(nextId+1);
    }}></Create>
  } else if(mode === 'UPDATE'){
    let title, body = null;
    for(let i=0; i<topics.length; i++){
      if(topics[i].id === id) {
        title = topics[i].title;
        body = topics[i].body;
      }
    }
    content = <Update title={title} body={body} onUpdate={(title, body)=>{
      // console.log(title, body);
      const newTopics = [...topics]
      const updatedTopic = {id:id, title:title, body:body}
      for(let i=0; i<newTopics.length; i++){
        if(newTopics[i].id === id){
          newTopics[i] = updatedTopic;
          break;
        }
      }
      setTopics(newTopics);
      setMode('READ');
    }}></Update>
  }
  return (
    <div>
      <Header title="WEB" onChangeMode={()=>{
        setMode('WELCOME');
      }}></Header>
       
      <Headers></Headers>
      <Oumtt></Oumtt>
      <Photo></Photo>
      <Nav topics={topics} onChangeMode={(_id)=>{
        setMode('READ');
        setId(_id);
      }}></Nav>
      {content}
      <ul>
        <li><a href="/create" onClick={event=>{
          event.preventDefault()
          setMode('CREATE')
        }}>Create</a></li>
        {contextControl}
      </ul>
    </div>
  );
}

export default App;
