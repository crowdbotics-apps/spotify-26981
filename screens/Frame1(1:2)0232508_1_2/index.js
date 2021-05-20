import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "../../modules/utils"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.View_2} />
      <View source={{ uri: "null" }} style={styles.View_2_10} />
      <View style={styles.View_2_3} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6bfd/6979/14508178eb4aa940368b0fa2260f5cdc"
        }}
        style={styles.ImageBackground_2_11}
      />
      <TouchableOpacity
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("2_2"))
        }
      >
        <View style={styles.View_4_17}>
          <Text style={styles.Text_4_17}>Premium</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("2_10"))
        }
      >
        <View style={styles.View_4_18}>
          <Text style={styles.Text_4_18}>Support</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.View_4_19}>
        <Text style={styles.Text_4_19}>Download</Text>
      </View>
      <View style={styles.View_4_21}>
        <Text style={styles.Text_4_21}>Sign up</Text>
      </View>
      <View style={styles.View_4_22}>
        <Text style={styles.Text_4_22}>Log in</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8139/55fb/7014bf12c440fc5b194490e8fffb732c"
        }}
        style={styles.ImageBackground_2_2}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/76d7/8cb0/47b4b85ded00ae36d142a954d02e0bd7"
        }}
        style={styles.ImageBackground_4_5}
      />
      <View style={styles.View_2_5} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b245/a070/0366eeca0f4497a9291ec75aca56c682"
        }}
        style={styles.ImageBackground_4_4}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a3b1/6530/2360f387cbb0026801ba580861e6bee9"
        }}
        style={styles.ImageBackground_4_6}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1d4e/6e2b/353aef44971305680316373f530f7cc2"
        }}
        style={styles.ImageBackground_4_11}
      />
      <View style={styles.View_4_13}>
        <Text style={styles.Text_4_13}>Listening is </Text>
      </View>
      <View style={styles.View_4_14}>
        <Text style={styles.Text_4_14}>everything</Text>
      </View>
      <View style={styles.View_4_15}>
        <Text style={styles.Text_4_15}>
          Millions of songs and podcasts. No credit card needed.
        </Text>
      </View>
      <View style={styles.View_4_16}>
        <Text style={styles.Text_4_16}>GET SPOTIFY FREE</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5458/2a7a/082463df467dfe1b7d9494d71844d193"
        }}
        style={styles.ImageBackground_4_26}
      />
      <View style={styles.View_26_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("139.89071038251367%") },
  View_2_10: {
    width: wp("33.611111111111114%"),
    minWidth: wp("33.611111111111114%"),
    height: hp("64.61748633879782%"),
    minHeight: hp("64.61748633879782%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("114.58333333333333%"),
    top: hp("-10.245901639344263%")
  },
  View_2_3: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("16.80327868852459%"),
    minHeight: hp("16.80327868852459%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.546448087431694%"),
    backgroundColor: "rgba(10, 9, 9, 1)"
  },
  ImageBackground_2_11: {
    width: wp("12.708333333333332%"),
    minWidth: wp("12.708333333333332%"),
    height: hp("24.453551912568305%"),
    minHeight: hp("24.453551912568305%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("67.91666666666667%"),
    top: hp("123.36065573770492%")
  },
  View_4_17: {
    width: wp("7.986111111111111%"),
    minWidth: wp("7.986111111111111%"),
    minHeight: hp("4.508196721311475%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.083333333333336%"),
    top: hp("6.420765027322404%")
  },
  Text_4_17: {
    color: "rgba(255, 250, 250, 1)",
    fontSize: 22,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_18: {
    width: wp("7.013888888888889%"),
    minWidth: wp("7.013888888888889%"),
    minHeight: hp("4.508196721311475%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("62.22222222222222%"),
    top: hp("6.420765027322404%")
  },
  Text_4_18: {
    color: "rgba(255, 250, 250, 1)",
    fontSize: 22,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_19: {
    width: wp("8.680555555555555%"),
    minWidth: wp("8.680555555555555%"),
    minHeight: hp("4.508196721311475%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71.11111111111111%"),
    top: hp("6.420765027322404%")
  },
  Text_4_19: {
    color: "rgba(255, 250, 250, 1)",
    fontSize: 22,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_21: {
    width: wp("6.458333333333334%"),
    minWidth: wp("6.458333333333334%"),
    minHeight: hp("4.508196721311475%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83.26388888888889%"),
    top: hp("6.284153005464481%")
  },
  Text_4_21: {
    color: "rgba(255, 250, 250, 1)",
    fontSize: 22,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_22: {
    width: wp("5.277777777777778%"),
    minWidth: wp("5.277777777777778%"),
    minHeight: hp("4.508196721311475%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("91.59722222222221%"),
    top: hp("6.420765027322404%")
  },
  Text_4_22: {
    color: "rgba(255, 250, 250, 1)",
    fontSize: 22,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_2_2: {
    width: wp("37.638888888888886%"),
    minWidth: wp("37.638888888888886%"),
    height: hp("72.26775956284153%"),
    minHeight: hp("72.26775956284153%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("90.625%"),
    top: hp("20.081967213114755%")
  },
  ImageBackground_4_5: {
    width: wp("16.041666666666668%"),
    minWidth: wp("16.041666666666668%"),
    height: hp("30.87431693989071%"),
    minHeight: hp("30.87431693989071%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-6.111111111111111%"),
    top: hp("58.333333333333336%")
  },
  View_2_5: {
    width: wp("20.555555555555554%"),
    minWidth: wp("20.555555555555554%"),
    height: hp("10.792349726775956%"),
    minHeight: hp("10.792349726775956%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43.26388888888889%"),
    top: hp("98.90710382513662%"),
    backgroundColor: "rgba(74, 226, 107, 1)",
    borderTopLeftRadius: 200,
    borderTopRightRadius: 200,
    borderBottomLeftRadius: 200,
    borderBottomRightRadius: 200
  },
  ImageBackground_4_4: {
    width: wp("17.01388888888889%"),
    minWidth: wp("17.01388888888889%"),
    height: hp("10.51912568306011%"),
    minHeight: hp("10.51912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.194444444444445%"),
    top: hp("3.6885245901639343%"),
    resizeMode: "cover"
  },
  ImageBackground_4_6: {
    width: wp("55.00000000000001%"),
    minWidth: wp("55.00000000000001%"),
    height: hp("108.87978142076503%"),
    minHeight: hp("108.87978142076503%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-20.97222222222222%"),
    top: hp("81.4207650273224%")
  },
  ImageBackground_4_11: {
    width: wp("10.625153647528753%"),
    minWidth: wp("10.625153647528753%"),
    height: hp("17.93932263317004%"),
    minHeight: hp("17.93932263317004%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-1.249193615383572%"),
    top: hp("73.72866771260246%")
  },
  View_4_13: {
    width: wp("51.94444444444445%"),
    minWidth: wp("51.94444444444445%"),
    minHeight: hp("23.08743169398907%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.305555555555555%"),
    top: hp("34.69945355191257%")
  },
  Text_4_13: {
    color: "rgba(74, 226, 107, 1)",
    fontSize: 115,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_14: {
    width: wp("47.5%"),
    minWidth: wp("47.5%"),
    minHeight: hp("23.08743169398907%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.236111111111114%"),
    top: hp("59.2896174863388%")
  },
  Text_4_14: {
    color: "rgba(74, 226, 107, 1)",
    fontSize: 115,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_15: {
    width: wp("41.25%"),
    minWidth: wp("41.25%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.02777777777778%"),
    top: hp("86.74863387978142%")
  },
  Text_4_15: {
    color: "rgba(74, 226, 107, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_16: {
    width: wp("14.444444444444443%"),
    minWidth: wp("14.444444444444443%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46.25%"),
    top: hp("102.04918032786885%")
  },
  Text_4_16: {
    color: "rgba(44, 91, 211, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_4_26: {
    width: wp("0.06944444444444445%"),
    minWidth: wp("0.06944444444444445%"),
    height: hp("3.551912568306011%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81.73611111111111%"),
    top: hp("7.377049180327869%")
  },
  View_26_2: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("95.08196721311475%"),
    minHeight: hp("95.08196721311475%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("139.89071038251367%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
