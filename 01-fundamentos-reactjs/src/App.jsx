import { Header } from "./components/Header"
import { Post } from "./Post"
import './styles.css'

export function App() {
  return (
    <div>
      <Header />

      <Post 
        author="Breno Façanha" 
        content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur, pariatur expedita. Magni eaque facilis numquam, libero quam accusamus? Animi veniam veritatis vero repellat officia quidem voluptatum ea praesentium temporibus aliquam."
      />
      <Post 
       author="Samara Vasconcelos" 
       content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur, pariatur expedita. Magni eaque facilis numquam, libero quam accusamus? Animi veniam veritatis vero repellat officia quidem voluptatum ea praesentium temporibus aliquam."
      />
      <Post />
      <Post />
      
    </div>
    
   
  )
}

