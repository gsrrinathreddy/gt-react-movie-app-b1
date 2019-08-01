import React,{Component} from 'react';
import {Tabs,Tab,Form,Button} from 'react-bootstrap'
import InputNumber from 'rc-input-number';
import axios from 'axios';
import './Movies.css';
import Axios from 'axios';
import Post from '../../components/post/Post';
class Movies extends Component{
    constructor(){
        super();
        this.state={
            posts:[],
            a:4
        }
        this.getPosts = this.getPosts.bind(this)
    }
    
    getPosts(){ 
        console.log("the posts data is",this.state.a)
        this.setState({a:6});
       
        const url = "https://jsonplaceholder.typicode.com/photos";
        axios.get(url)
             .then(res =>{
                 this.setState({posts:res.data});
                 console.log("the posts data is",this.state.posts)
             }).catch(err => console.log(err));

             console.log("the posts data is",this.state.a)
        
    }

    getComments(){
        console.log("Hi Comments is Clicked")
    }

    getPhotos(){
        console.log("Hi Photos is Clicked")
    }

    getAlbums(){
        console.log("Hi Albums is Clicked")
    }

    getToDos(){
        console.log("Hi ToDos is Clicked")
    }

    getUsers(){
        console.log("Hi Users is Clicked")
    }
    render(){

       let postCardItemsData = this.state.posts;
       console.log("postCard",postCardItemsData)
       
       let PostCmponent = postCardItemsData.map(post=>{
           return <Post title={post.title} body={post.body} url={post.url}/>
       })


        return(
        <div className="movies">
            <Tabs defaultActiveKey="profile"   id="uncontrolled-tab-example">
            <Tab eventKey="posts"   title="posts">
              <Button onClick={this.getPosts}>
                GET POSTS
              </Button>
                <div className="row">
                
                {PostCmponent}
                
                </div>
                
            </Tab>
            <Tab eventKey="comments"  title="comments">
            <Button onClick={this.getComments}>
                GET Comments
              </Button>
            </Tab>
            <Tab eventKey="photos"  title="photos" >
              
            </Tab>
                <Tab className="tab-container" eventKey="albums" title="albums" >
               
            
            </Tab>
            <Tab eventKey="todos"  title="todos" >
              
            </Tab>
            <Tab eventKey="users"  title="users" >
              
            </Tab>
        </Tabs>    
        </div>

       
        )
    }
}

const movieInstance = new Movies();
console.log("Hi iam movies",movieInstance.getPosts)
export default Movies;