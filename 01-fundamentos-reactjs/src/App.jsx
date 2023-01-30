import { Header } from "./components/Header"
import { Post } from "./Post"
import { Sidebar } from "./components/Sidebar"

import styles from './App.module.css'

import './global.css'


export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post 
            author="Breno Façanha" 
            content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur, pariatur expedita. Magni eaque facilis numquam, libero quam accusamus? Animi veniam veritatis vero repellat officia quidem voluptatum ea praesentium temporibus aliquam."
          />
          <Post 
            author="Samara Vasconcelos" 
            content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur, pariatur expedita. Magni eaque facilis numquam, libero quam accusamus? Animi veniam veritatis vero repellat officia quidem voluptatum ea praesentium temporibus aliquam."
          />
        </main>
      </div>
    </div> 
  )
}

