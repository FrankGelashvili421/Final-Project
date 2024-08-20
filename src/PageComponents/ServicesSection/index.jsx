import {setUserPosts} from '../redux/slices/postsSlice';
import triplecube from '../../Assests/triple cube.png'
import {useDispatch, useSelector} from 'react-redux';
import {Pagination} from '@mui/material';
import {useEffect} from 'react';
import axios from 'axios';
import './style.css'

export const ServicesSection =() =>{

    const posts = useSelector((state) => state.posts.userPosts);
    
    const dispatch = useDispatch();
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await  axios.get('https://jsonplaceholder.typicode.com/posts');
            dispatch(setUserPosts(response.data))
          } catch (err) {
           console.log(err, 'error')
          }
        };
        
        fetchData();
    }, [dispatch]);

    return (
        <section className='ServicesSection'>
            <div className='ServicesHeader'>
                <div className='ServiceHeaderFlexBox'>
                    <div className='Title'>
                        <button><p>Our Services</p></button>
                        <h1>Stay One Step Ahead of Adversaries</h1>
                    </div>
                    <div className='Paragraph'>
                        <p>Lorem ipsum dolor sit amet consectetur. Blandit duis vestibulum a sed quis ante vitae vitae. Vitae vel proin quis iaculis. Senectus morbi sit volutpat id egestas augue tempor. Augue faucibus est at curabitur adipiscing ornare nunc sem libero.</p>
                        <button>Learn More</button>
                    </div>
                </div>
                <div className='ServicesBody' >
                        {
                            posts.map((post, index)=>(
                                <div key={index} className='ServicesBodyCards'>
                                    <div className='ServicesBodyImage'>
                                        <img src={triplecube} alt="cubes"/>
                                    </div>
                                    <div className='ServicesBodyTitle'>
                                        <h1>{post.title}</h1>
                                        <p>{post.body}</p>
                                    </div>
                                </div>
                            ))
                        }
                        <Pagination count={13} variant='outlined' color='secondary'/>
                </div>
            </div>
        </section>
    )
}