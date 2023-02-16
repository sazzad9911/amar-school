import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import { SvgXml } from 'react-native-svg';

function FreeALeasons(props) {
  return (
    <TouchableOpacity style={{ width: 154, height: 200, marginRight: 10, alignItems: 'center', backgroundColor: '#fff', borderRadius: 20 }}>
      <SvgXml xml={FBG}
        height="122"
        width="154"


      />
      <View style={{alignItems:'center'}}>
        <View style={{height:17,width:65,borderRadius:9,backgroundColor:'#6F7071',marginTop:10,alignItems:'center',justifyContent:'center'}}>
          <Text style={{fontSize:8,}}>
            {props.Name}
          </Text>
        </View>
        <Text style={{fontSize:10}}>Grammer</Text>
        <Text style={{fontSize:6}}>Tap to learn</Text>
      </View>
    </TouchableOpacity>
  );
}

export default FreeALeasons;
const FBG = `<svg xmlns="http://www.w3.org/2000/svg" width="154" height="119" viewBox="0 0 154 119">
 <g id="Group_505" data-name="Group 505" transform="translate(-36 -654)">
   <path id="Rectangle_179" data-name="Rectangle 179" d="M16,0H138a16,16,0,0,1,16,16V119a0,0,0,0,1,0,0H0a0,0,0,0,1,0,0V16A16,16,0,0,1,16,0Z" transform="translate(36 654)" fill="rgba(0,0,0,0.26)" opacity="0.86"/>
   <g id="Group_480" data-name="Group 480" transform="translate(0 -73)">
     <circle id="Ellipse_344" data-name="Ellipse 344" cx="12" cy="12" r="12" transform="translate(101 775)" fill="#fff" opacity="0.7"/>
     <path id="Polygon_2" data-name="Polygon 2" d="M4,0,8,7H0Z" transform="translate(117 783) rotate(90)" fill="#4d72b8"/>
   </g>
   <text id="_Noun_Pronoun_Adjective_Verb_Adverb" data-name="* Noun
* Pronoun
* Adjective
* Verb
* Adverb" transform="translate(46 701)" fill="#132954" font-size="8" font-family="HindSiliguri-Medium, Hind Siliguri" font-weight="500"><tspan x="0" y="0">* Noun</tspan><tspan x="0" y="8">* Pronoun</tspan><tspan x="0" y="16">* Adjective</tspan><tspan x="0" y="24">* Verb</tspan><tspan x="0" y="32">* Adverb</tspan></text>
 </g>
</svg>
`