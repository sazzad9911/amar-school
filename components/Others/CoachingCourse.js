import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native'

const CoachingCourse =({
    onPress,TutorCount,ExamCount,ClassCount,SubjectCount,TestCount,bColor,Color
      }) =>{
    return (
        <View style={[art.fullContainer,{borderColor:bColor}]}>
            <StatusBar backgroundColor='#fff'/>
            <View style={[art.firstContainer,{backgroundColor:Color}]}>
                <View style={{ marginBottom: 5 }}>
                    <Text style={{ fontSize: 17, color: '#fff', textAlign: 'center' }}>
                        HSC"23
                    </Text>
                    <View style={{ backgroundColor: '#070707', padding: 2, width: 60, borderRadius: 5 }}>
                        <Text style={{ fontSize: 6, color: '#fff', textAlign: 'center' }}>
                            SHORT SYLLABUS
                        </Text>
                    </View>
                </View>
                <View style={art.firstRow}>
                    <View style={art.textBox}>
                        <Text style={{ fontSize: 6 }}>
                            {ClassCount}
                        </Text>
                        <Text style={{ fontSize: 6 }}>
                            Classes
                        </Text>
                    </View>
                    <View style={art.textBox}>
                        <Text style={{ fontSize: 6 }}>
                            {ExamCount}
                        </Text>
                        <Text style={{ fontSize: 6 }}>
                            Exams
                        </Text>
                    </View>
                    <View style={art.textBox}>
                        <Text style={{ fontSize: 6 }}>
                            {SubjectCount}
                        </Text>
                        <Text style={{ fontSize: 6 }}>
                            Subjects
                        </Text>
                    </View>
                </View>
                <View style={art.secondRow}>
                    <View style={art.textBox}>
                        <Text style={{ fontSize: 6 }}>
                            {TestCount}
                        </Text>
                        <Text style={{ fontSize: 5 }}>
                            Model Tests
                        </Text>
                    </View>
                    <View style={art.textBox}>
                        <Text style={{ fontSize: 6 }}>
                            {TutorCount}
                        </Text>
                        <Text style={{ fontSize: 6 }}>
                            Tutors
                        </Text>
                    </View>

                </View>

            </View>
            <View style={{ flexDirection: 'row', paddingHorizontal: 5, paddingVertical: 10,justifyContent:'space-between',alignItems:'center' }}>
                <View style={{width:'70%'}}>
                    <Text style={{ fontSize: 9 }}>
                        Course Duration 365 days
                    </Text>
                    <Text style={{ fontSize: 8 }}>
                        Price 500 TK 
                    </Text>
                </View>
                <TouchableOpacity onPress={onPress}
           style={art.Press}>
                    <Text style={{ fontSize: 9,color:'#fff'}}>Details</Text>
                </TouchableOpacity>
            </View>


        </View>
    );
}

export default CoachingCourse;

const art = StyleSheet.create({
    textBox: {
        height: 24,
        width: 35,
        borderRadius: 5,
        backgroundColor: '#fff',
        alignItems: 'center',
        marginLeft: 5
    },
    firstRow: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        justifyContent: 'center'
    },
    fullContainer: {
        width: 154,
        height: 170,
        borderRadius: 20,
        marginRight: 10,
        borderWidth: 2,
        marginBottom: 20
    },
    firstContainer: {
        height: 100,
        width: 152,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        top:-1,
        left:-1,
        alignItems: 'center',
    }, 
    secondRow: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        justifyContent: 'center',
        marginTop: 5,
    },
    Press:{height:23,width:43,borderRadius:5,backgroundColor:'#51B7FB',alignItems:'center',justifyContent:'center'}
})