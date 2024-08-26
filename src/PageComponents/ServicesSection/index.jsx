import {setUserPosts} from '../redux/slices/postsSlice';
import triplecube from '../../Assests/triple cube.png'
import {useDispatch, useSelector} from 'react-redux';
import {Pagination} from '@mui/material';
import {useEffect, useState} from 'react';
import axios from 'axios';
import './style.css'

export const ServicesSection =() =>{

    const posts = useSelector((state) => state.posts.userPosts);

    const [page, setPage] = useState(1);
    const itemsPerPage = 8;
    
    const totalPages = Math.ceil(posts.length / itemsPerPage);
    
    const displayedData = posts.slice((page - 1) * itemsPerPage, page * itemsPerPage);
    
    const handlePageChange = (event, value) => {
      setPage(value);
    };
    
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
                            displayedData.map((post, index)=>(
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
                        <Pagination 
                            onChange={handlePageChange} 
                            count={13} 
                            variant='outlined' 
                            color='secondary' 
                            sx={{
                                    '& .MuiPaginationItem-root': {color: 'white'},
                                }}
                        />
                </div> 
            </div>
        </section>
    )
}


