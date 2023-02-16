import React from 'react';
import { View,Text, TouchableOpacity } from 'react-native';
import { SvgXml } from 'react-native-svg';

function Coaching(props) {
    return (
        <TouchableOpacity style={{height:140,backgroundColor:'red',borderRadius:10,padding:20,justifyContent:'center',marginVertical:10,}}>
           
            <Text style={{fontSize:13}}>
            ইন্টারঅ্যাকটিভ লাইভ ক্লাসে
            </Text>
            <Text style={{fontSize:22}}>
            অনলাইন কোচিং
            </Text>
        </TouchableOpacity>
    );
}

export default Coaching;

const bg = `<svg xmlns="http://www.w3.org/2000/svg" width="318" height="140" viewBox="0 0 318 140">
<rect id="Rectangle_158" data-name="Rectangle 158" width="318" height="140" rx="14" fill="#b0e1f6"/>
</svg>
`