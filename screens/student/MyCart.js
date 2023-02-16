import {
  Alert,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import uuid from 'react-native-uuid';
import SSLCommerzPayment from "sslcommerz-lts";
import React, { useEffect, useState } from "react";
import Button from "../../components/main/Button";
import { AntDesign } from "@expo/vector-icons";
import CheckBox from "../../components/CheckBox";
import { useSelector } from "react-redux";
import { checkOut, deleteFromCart, getCartList, pay } from "../../apis/courses";
import { useIsFocused } from "@react-navigation/native";
import { url } from "../../apis/api";

const MyCart = (props) => {
  const userInfo=useSelector(state=>state.userInfo)
  const [cartList,setCartList]=useState()
  const isFocused=useIsFocused()
  const [refresh,setRefresh]=useState(false)
  const [total,setTotal]=useState(0)
  const [checked,setChecked]=useState(false)
  const [discount,setDiscount]=useState(0)
  const [gradTotal,setGrandTotal]=useState(0)
  const [info,setInfo]=useState()
  const [click,setClick]=useState(false)
  //console.log(userInfo.meta.token)

  useEffect(()=>{
    setClick(false)
    if(userInfo){
      
      //setTotal(0)
      getCartList(userInfo).then(res=>{
        setCartList(res.data.data.carts)
        let count=0;
        res.data.data.carts.map(doc=>{
          count=count+parseFloat(doc.price)
        })
        setTotal(count)
        //console.log(count)
      }).catch(err=>{
        console.error(err.response.data.message)
      })
      checkOut(userInfo).then(res=>{
        setGrandTotal(res.data.data.grand_total)
        setInfo(res.data.data.student)
      }).catch(err=>{
        Alert.alert(err.response.data.message)
      })
    }
  },[isFocused,refresh])
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={{ paddingHorizontal: 20 }}>
      {cartList&&cartList.map((doc,i)=>(
        <Cart onDelete={()=>{
          
          deleteFromCart(userInfo,doc.id).then(res=>{
            setRefresh(val=>(!val))
          }).catch(err=>{
            setRefresh(val=>(!val))
           // Alert.alert(err.response.data.message)
          })
        }} data={doc} key={i} />
      ))}
      {cartList&&cartList.length==0&&(
        <Text style={{
         textAlign:"center",
          marginVertical:10
        }}>No Course Found</Text>
      )}
      {!cartList&&(
       <Text style={{
        textAlign:"center",
        marginVertical:10
      }}>Ops! Not Found</Text>
      )}
      <Text style={{fontSize:18,color:'green',fontWeight:'500',marginTop:20}}>Order Summery</Text>
      <View
        style={{
          flexDirection: "row",
          width: "100%",
          justifyContent: "space-between",
        }}
      >
        <View>
          <View
            style={{
              flexDirection: "row",
              width: 160,
              justifyContent: "space-between",
            }}
          >
            <Text>
              items <Text>{`(${cartList?cartList.length:"0"})`}</Text>
            </Text>
            <Text>:</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              width: 160,
              justifyContent: "space-between",
            }}
          >
            {/* <Text>
              Platform Charge 
            </Text>
            <Text>:</Text> */}
          </View>
        </View>
        <View> 
          <Text>৳ {gradTotal}</Text>
          {/* <Text>৳ {(gradTotal-total).toFixed(2)}</Text> */}
        </View>
      </View>
      <View style={{height:1,width:'100%',backgroundColor:'#707070',marginVertical:10}}>

      </View>
      <View style={{width:'100%',justifyContent:'space-between',flexDirection:'row'}}>
        <Text>Total :</Text>
        <Text>৳ {gradTotal}</Text>
      </View>
     <View style={{
      flexDirection:"row",
      marginVertical:10
     }}>
     <CheckBox value={checked} onChange={()=>{
      setChecked(val=>(!val))
     }} style={{marginTop:10}} />
      <Text style={{
        width:"90%"
      }}>By placing your order, you agree with our company privacy policy and conditions of use.</Text>
     </View>
        <Button disabled={click} onPress={() => {
          if(!checked){
            Alert.alert("Please!","Agree with all conditions")
            return
          }
          if(total<1){
            Alert.alert("Please select courses to paid")
            return
          }
          if(!info){
            Alert.alert("Server error")
            return;
          }
          setClick(true)
          payment(gradTotal,info,props.navigation)
            
          }} title={click?"Loading..":`Pay ${gradTotal} in BDT`} style={{backgroundColor:'green',color:'#fff',height:40,marginTop:20}}/>
        {/* <Button title={'Cancel Order'} style={{backgroundColor:'red',color:'#fff',height:40,}}/> */}

    </ScrollView>
  );
};

export default MyCart;
const plus=(num1,num2)=>{
  num1=parseFloat(num1)
  num2=parseFloat(num2)
  return parseFloat(num1+num2).toFixed(2)
}
const styles = StyleSheet.create({});

const Cart = ({data,onDelete}) => {
  const [courseData,setCourseData]=useState()
  useEffect(()=>{
    if(data.course){
      setCourseData(data.course)
    }else{
      setCourseData(data.bundle)
    }
  },[])
  //console.log(data)
  return (
    <View style={{ marginTop: 10, backgroundColor: "#FFFDD0", paddingTop: 10 }}>
      <View
        style={{
          position: "absolute",
          zIndex: 50,
          alignItems: "flex-end",
          width: "100%",
          marginTop: 60,
          marginRight: 20,
          marginLeft: -10,
        }}
      >
        <AntDesign onPress={()=>{
          if(onDelete){
            onDelete()
          }
        }} name="delete" size={20} color="red" />
      </View>
      <View style={{ flexDirection: "row", paddingHorizontal: 10 }}>
        <Image
          style={{
            height: 80,
            width: 100,
            borderRadius: 10,
          }}
          source={{
            uri: `${url}${courseData?.image}`
          }}
        />
        <View style={{ width: "65%", marginLeft: 5 }}>
          <Text numberOfLines={2} style={{ fontWeight: "500", fontSize: 16 }}>
            {data.course?courseData?.title:courseData?.name}
          </Text>
          {/* <Text>
            AMAR SCHOOL <Text>|</Text> <Text> LEVEL 1</Text>
          </Text> */}
          <View style={{ flexDirection: "row" }}>
            <View style={{ width: 50 }}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text>Type</Text>
                <Text>:</Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text>Price</Text>
                <Text>:</Text>
              </View>
            </View>
            <View style={{ marginLeft: 10 }}>
              <Text>{data.course?"Course Only":"Bundle Offer"}</Text>
              <Text>{data.price?data.price+"৳":"Free"}</Text>
            </View>
          </View>
        </View>
      </View>
      {/* <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 10,
          marginHorizontal: 10,
        }}
      >
        <TextInput
          style={{
            width: "65%",
            borderWidth: 1,
            borderColor: "#e5e5e5",
            paddingHorizontal: 10,
            height: 40,
          }}
          placeholder={"Coupon Code"}
        />
        <Button
          style={{
            width: "25%",
            backgroundColor: "green",
            height: 40,
            color: "#fff",
          }}
          title={"Apply"}
        />
      </View> */}
    </View>
  );
};
const payment = async (gradTotal,info,navigation) => {
  const store_id = "amarschoolcombdlive";
  const store_passwd = "63D90503451C994999";
  const id=uuid.v4();
  const data = {
    total_amount: gradTotal,
    currency: "BDT",
    tran_id: id, // use unique tran_id for each api call
    success_url: "success",
    fail_url: "failed",
    cancel_url: "cancel",
    ipn_url: "ipn",
    shipping_method: "Online",
    product_name: "Course",
    product_category: "Course",
    product_profile: "general",
    cus_name: info.first_name,
    cus_email: "none",
    cus_add1: info.address,
    cus_add2: info.address,
    cus_city: info.address,
    cus_state: info.address,
    cus_postcode: "1000",
    cus_country: "Bangladesh",
    cus_phone: info.phone_number,
    cus_fax: "01711111111",
    ship_name: info.first_name,
    ship_add1: info.address,
    ship_add2:info.address,
    ship_city: "Dhaka",
    ship_state: "Dhaka",
    ship_postcode: 1000,
    ship_country: "Bangladesh",
  };

  const sslcz = new SSLCommerzPayment(store_id, store_passwd, true);
  sslcz.init(data).then((apiResponse) => {
    // Redirect the user to payment gateway
    let GatewayPageURL = apiResponse.GatewayPageURL;
    //res.redirect(GatewayPageURL)
    //setLink(GatewayPageURL);
    if(GatewayPageURL){
      navigation.navigate("PaymentPage", { url: GatewayPageURL,id:id })
    }else{
      Alert.alert("Ops!","Url Not Found")
    }
    console.log("Redirecting to: ", GatewayPageURL);
  });
};