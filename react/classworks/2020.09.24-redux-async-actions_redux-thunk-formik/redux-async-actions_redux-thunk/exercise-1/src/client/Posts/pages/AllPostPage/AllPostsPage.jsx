import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux'
import {actionGetPost} from '../../../../store/actions/actionGetPost'
import PostItem from '../../components/PostItem/PostItem'

const AllPostsPage = () => {
    const dispatch = useDispatch();

    const {list, preloader, error} = useSelector(state => state.posts);

    useEffect(()=>{
        const action = actionGetPost();
        dispatch(action);
    }, []);

    const postsElements = list.map((item) => <PostItem key={item.id} {...item} />);
    const result = preloader ? <p>Данные загружаются</p> : postsElements;
    
    return(
    <div>
        {result}
        {error ? <p>{error}</p> : '' }
    </div>
    )
};

export default AllPostsPage;