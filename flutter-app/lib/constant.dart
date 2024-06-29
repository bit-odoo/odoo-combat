import 'package:flutter/material.dart';

class Static
{
  static String? userName="";
  static String? phoneNo="";
  static String? email="";
  static String? uid="";
  static String? address="";
  static String? loginMethod="";
  static bool isBasicDetail=false;




  static setUid(String uidno)
  {
    Static.uid=uidno;
  }
}

// Future<void> googleLogin(BuildContext context) async {
//   try {
//     GoogleSignInAccount? googleUser = await GoogleSignIn().signIn();
//
//     if (googleUser == null) {
//       // User canceled the sign-in process
//       showDialog(
//         context: context ,
//         builder: (BuildContext context) {
//           return AlertDialog(
//             title: Text("Caution"),
//             content: Text("you are canceled google sign in process"),
//             actions: [
//               TextButton(
//                 onPressed: () {
//                   Navigator.pop(context);
//                 },
//                 child: Text("OK"),
//               ),
//             ],
//           );
//         },
//       );
//       return;
//     }
//
//     GoogleSignInAuthentication googleAuth = await googleUser.authentication;
//
//     AuthCredential credential = GoogleAuthProvider.credential(
//       idToken: googleAuth.idToken,
//       accessToken: googleAuth.accessToken,
//     );
//
//     UserCredential userCredential =
//     await FirebaseAuth.instance.signInWithCredential(credential);
//
//     if (userCredential.user != null) {
//       Static.uid = userCredential.user?.uid;
//       Static.userName=userCredential.user?.displayName;
//       Static.email=userCredential.user?.email;
//       Static.loginMethod="google";
//       Static.phoneNo=userCredential.user?.phoneNumber;
//
//       // Making a request to your Django server using dio
//
//       final dio = Dio();
//       var formdata= FormData.fromMap({
//         'uid' : Static.uid,
//         'userName': Static.userName,
//         'email': Static.email,
//
//
//       });
//       final response = await dio.post('$serverApi/api/addAppUser/', data: formdata);
//
//       print(response.data);
//
//       Navigator.of(context).pushReplacementNamed('/basicdetails');
//     }
//   } on FirebaseAuthException catch (error) {
//     print("Error during Google sign-in: $error");
//     showDialog(
//       context: context ,
//       builder: (BuildContext context) {
//         return AlertDialog(
//           title: Text("Login Error"),
//           content: Text(error.message ?? "An error occurred during login."),
//           actions: [
//             TextButton(
//               onPressed: () {
//                 Navigator.pop(context);
//               },
//               child: Text("OK"),
//             ),
//           ],
//         );
//       },
//     );
//     // Handle the error, e.g., display an error message to the user.
//   }
// }
// 'loginMethod': Static.loginMethod,
// 'phoneNo': Static.phoneNo,
// 'address':
//
//
// login(String email, String pass) async {
//   try {
//     UserCredential? usercredential;
//
//     usercredential = await FirebaseAuth.instance
//         .signInWithEmailAndPassword(email: email, password: pass);
//
//     if(usercredential.user != null)
//     {
//       Static.setUid(usercredential!.user!.uid);
//
//       Static.email=usercredential.user?.email;
//       Static.loginMethod="email";
//       Static.phoneNo=usercredential.user?.phoneNumber;
//
//       print(Static.uid);
//       print(Static.email);
//       print(usercredential.user?.providerData);
//       Navigator.of(context).pushReplacementNamed('/basicdetails');
//
//     }
