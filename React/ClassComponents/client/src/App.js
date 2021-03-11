import logo from './logo.svg';
import './App.css';
import Project from './Components/Project';
import Children from './Components/Children';

function App() {
  return (
    <>
      <header>
        <h1>Jayne Doe</h1>
        <h2>Master of Shadows and the Internet</h2>
      </header>
      <main>
        <div className="top-row">
          <img src="https://nypost.com/wp-content/uploads/sites/2/2017/09/feature.jpg?quality=90&strip=all&w=618&h=410&crop=1" alt="Rad astronaut dude"/>
          <section>
            <h3>About...</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias consequuntur voluptates sunt recusandae commodi assumenda enim cupiditate tempora officia facere laudantium, consequatur harum maiores neque ipsam sint iste, quasi, optio hic quia ullam. Blanditiis perspiciatis ullam accusantium vero ratione magnam pariatur quasi placeat eos assumenda. Repellendus cum id a! Culpa, cupiditate ea. Officiis culpa sunt dicta?</p>
          </section>
        </div>
        <div className="projects">
          {/* <Project
            title={"La Mode"}
            imgSrc={"https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg"}
            imgAlt={"Image of Elephant"}
            description={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident aspernatur voluptate necessitatibus sunt quo soluta, tempore officia quibusdam illum? Accusamus, exercitationem vel."}
          />
          <Project
            title={"Family Contacts"}
            imgSrc={"https://miro.medium.com/max/4800/1*jFyawcsqoYctkTuZg6wQ1A.jpeg"}
            imgAlt={"Monkey on a typewriter"}
            description={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident aspernatur voluptate necessitatibus sunt quo soluta, tempore officia quibusdam illum? Accusamus, exercitationem vel."}
          />
          <Project
            title={"fiveEleven"}
            imgSrc={"http://gamasutra.com/db_area/images/news/2018/Jun/320213/supermario64thumb1.jpg"}
            imgAlt={"Itsa me, Mario"}
            description={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident aspernatur voluptate necessitatibus sunt quo soluta, tempore officia quibusdam illum? Accusamus, exercitationem vel."}
          /> */}
          <Children
            title={"some title"}
            description={"lorem ipsum bacon something or other"}
          >
            <ul>
              <li>Thing 1</li>
              <li>Thing 2</li>
              <li>Thing 3</li>
            </ul>
          </Children>
          <Children
            title={"some image"}
            description={"this component's child is going to be an image"}
          >
            <img src="https://i.pinimg.com/originals/72/65/dc/7265dc8d96780294582b1a8bd92adf1c.gif" alt="Quack"/>
          </Children>
        </div>
      </main>
    </>
  );
}

export default App;
