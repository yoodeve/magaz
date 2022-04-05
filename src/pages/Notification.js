import React from "react";
import {Grid, Text, Image} from '../elements';
import Card from "../components/Card";


const Notifi = (props) => {
    let noti = [
        {user_name:'yoo', post_id:'post_id1', image_url:'',},
        {user_name:'yoo', post_id:'post_id2', image_url:'',},
        {user_name:'yoo', post_id:'post_id3', image_url:'',},
        {user_name:'yoo', post_id:'post_id4', image_url:'',},
        {user_name:'yoo', post_id:'post_id5', image_url:'',},
        {user_name:'yoo', post_id:'post_id6', image_url:'',},
    ];
    return (
    <React.Fragment>
        <Grid padding='16px' bg='aliceblue'>
            {noti.map((n)=>{
                return (
                    <Card key={n.post_id} {...n}/>
                )
            })}
        </Grid>
    </React.Fragment>
    )
}

export default Notifi;