import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:odoo_app/Colors.dart';
import 'package:flutter/cupertino.dart';

import 'addpost.dart';
class Login extends StatefulWidget {
  const Login({super.key});

  @override
  State<Login> createState() => _LoginState();
}

class _LoginState extends State<Login> {
  bool _isPasswordShow = false;

  final formKey = GlobalKey<FormState>();
  final emailController = TextEditingController();
  final passwordController = TextEditingController();
  void initState() {
    // TODO: implement initState
    _isPasswordShow = false;
    super.initState();
  }
  @override
  Widget build(BuildContext context) {
    double height = MediaQuery.of(context).size.height;
    double width = MediaQuery.of(context).size.width;
    Icon eye = Icon(
      CupertinoIcons.eye_slash,
      color: primaryBlack,
    );

    return MaterialApp(
      debugShowCheckedModeBanner: false,
      home: Scaffold(
        backgroundColor: bacckground,
        body: SingleChildScrollView(
          child: Column(
            mainAxisAlignment: MainAxisAlignment.start,
            children: [
              //Logo section
              Container(

                margin: const EdgeInsets.fromLTRB(0, 0, 0,40),
                child:
                Center(child: Image.asset("assets/images/login.png")),
              ),
              // Form
              Container(
                margin: const EdgeInsets.fromLTRB(20, 0, 20, 0),
                child: Form(
                  key: formKey,
                  child: Column(
                    mainAxisAlignment: MainAxisAlignment.center,
                    crossAxisAlignment: CrossAxisAlignment.stretch,
                    children: [
                      //Username
                       Text(
                        "Email",
                        style: TextStyle(
                          color: primaryBlack,
                          fontSize: 16,
                          fontWeight: FontWeight.bold,
                        ),
                      ),
                      const SizedBox(height: 8),
                      TextFormField(
                        controller: emailController,
                        enableSuggestions: true,
                        style: GoogleFonts.poppins(
                          color: primaryBlack,
                          fontWeight: FontWeight.w400,
                          fontSize: 14,
                          letterSpacing: 1,
                        ),
                        keyboardType: TextInputType.emailAddress,
                        autofillHints: [AutofillHints.email],
                        decoration: InputDecoration(
                          // labelText: 'Username / Email',
                          labelStyle: GoogleFonts.poppins(
                              color: primaryBlack,
                              fontWeight: FontWeight.w600,
                              fontSize: 14),
                          errorStyle:
                          const TextStyle(color: Colors.redAccent),
                          errorBorder: const OutlineInputBorder(
                              borderRadius:
                              BorderRadius.all(Radius.circular(10)),
                              borderSide: BorderSide(
                                color: Colors.red,
                                width: 1.0,
                              )),
                          hintText: 'Email',
                          hintStyle:  TextStyle(color:primaryBlack),
                          filled: true,
                          focusedBorder: OutlineInputBorder(
                              borderRadius:
                              const BorderRadius.all(Radius.circular(10)),
                              borderSide: BorderSide(
                                color: primaryGreen,
                                width: 1.0,
                              )),
                          border: InputBorder.none,
                          fillColor:textFieldBg,
                          enabledBorder: const OutlineInputBorder(
                            borderSide: BorderSide.none,
                            borderRadius:
                            BorderRadius.all(Radius.circular(10)),
                          ),
                        ),
                        validator: (value) {
                          bool emailValidate = RegExp(
                              r'^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$')
                              .hasMatch(value!);
                          if (value!.isEmpty) {
                            return "* Please enter email";
                          }

                          if (!emailValidate) {
                            return "* Enter Valid Email";
                          }
                        },
                      ),
                      const SizedBox(
                        height: 20,
                      ),
                       Text(
                        "Password",
                        style: TextStyle(
                          color: primaryBlack,
                          fontSize: 16,
                          fontWeight: FontWeight.bold,
                        ),
                      ),

                      const SizedBox(
                        height: 6,
                      ),

                      // -------------------------------------- Password ----------------------------------------//

                      // Password

                      TextFormField(
                        controller: passwordController,
                        style: GoogleFonts.poppins(
                          color: primaryBlack,
                          fontWeight: FontWeight.w400,
                          fontSize: 14,
                          letterSpacing: 1,
                        ),
                        obscureText: _isPasswordShow,
                        decoration: InputDecoration(
                          // labelText: 'Password',
                          labelStyle: GoogleFonts.poppins(
                              color: primaryBlack,
                              fontWeight: FontWeight.w400,
                              fontSize: 14),
                          hintText: 'Password',

                          hintStyle:  TextStyle(color:primaryBlack ),
                          errorBorder: const OutlineInputBorder(
                              borderRadius:
                              BorderRadius.all(Radius.circular(10)),
                              borderSide: BorderSide(
                                color: Colors.red,
                                width: 1.0,
                              )),

                          //  for Error

                          errorStyle:
                          const TextStyle(color: Colors.redAccent),
                          filled: true,
                          focusedBorder: OutlineInputBorder(
                              borderRadius:
                              const BorderRadius.all(Radius.circular(10)),
                              borderSide: BorderSide(
                                color: primaryGreen,
                                width: 1.0,
                              )),
                          border: InputBorder.none,
                          enabled: true,
                          fillColor: textFieldBg,
                          suffixIcon: IconButton(
                              onPressed: () {
                                setState(() {
                                  _isPasswordShow
                                      ? _isPasswordShow = false
                                      : _isPasswordShow = true;
                                  _isPasswordShow
                                      ? eye = Icon(CupertinoIcons.eye,
                                      color: primaryBlack)
                                      : eye = Icon(
                                    CupertinoIcons.eye_slash,
                                    color:primaryBlack,);
                                });
                              },
                              icon: eye,
                          ),
                          enabledBorder: const OutlineInputBorder(
                            borderSide: BorderSide.none,
                            borderRadius:
                            BorderRadius.all(Radius.circular(4)),
                          ),
                        ),
                        validator: (value) {
                            if (value!.isEmpty) {
                              return "* Please Enter Password";
                            } else if (passwordController.text.length < 6) {
                              return " Password Consist atlist 6 Character ";
                            } else {}
                          },
                          ),
                      Column(
                        crossAxisAlignment: CrossAxisAlignment.stretch,
                        children: [
                          // Existing code for email and password fields
                          const SizedBox(height: 3), // Add some space between password field and button
                          Align(
                            alignment: Alignment.centerRight,
                            child: TextButton(
                              onPressed: () {
                                // Navigator.of(context).pushReplacementNamed('/forgot');
                              },
                              child: Text(
                                  "Forgot Password ?",
                                  style:GoogleFonts.poppins(
                                    fontSize: 14,
                                    fontWeight: FontWeight.w600,
                                    color:primaryBlack,
                                  )
                              ),
                            ),
                          ),
                        ],
                      ),

                      // SizedBox(
                      //   height: height / 30,
                      // ),
                      SizedBox(
                        // margin: EdgeInsets.fromLTRB(0,, 0, 5),
                        width: double.infinity,
                        height: height / 17.3,
                        child: ElevatedButton(
                          onPressed: () => {
                            if (formKey.currentState!.validate())
                              {
                                print("Validation done"),
                                // login(emailController.text.toString(), passwordController.text.toString())
                              },

                          },
                          style: ButtonStyle(
                            backgroundColor:
                         MaterialStatePropertyAll(primaryGreen),
                            shape: MaterialStateProperty.all<
                                RoundedRectangleBorder>(
                              RoundedRectangleBorder(
                                  borderRadius: BorderRadius.circular(4),
                                  side:
                                  BorderSide(color: primaryGreen)),
                            ),
                          ),
                          child: Text(
                            "Log in",
                            style: GoogleFonts.poppins(
                              fontSize: 18,
                              fontWeight: FontWeight.w800,
                              color: Colors.white,
                            ),
                          ),
                        ),
                      ),
                    ],
                  ),
                ),
              ),

              Padding(
                padding: EdgeInsets.fromLTRB(20, height * 0.0145, 20, 0),
                child: Column(
                    mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                    children: [
                      Row(
                        mainAxisAlignment: MainAxisAlignment.start,
                        children: [
                          Flexible(
                            child: Text(
                              "Don't Have An Account ?",
                              style: GoogleFonts.poppins(
                                fontSize: 16,
                                color: primaryBlack,
                                fontWeight: FontWeight.w600,
                                letterSpacing: 1,
                              ),
                            ),
                          ),
                          TextButton(
                            onPressed: () {
                              // Navigator.of(context).pushReplacementNamed('/signup');
                            },
                            child: Text(
                              "Sign Up",
                              style: GoogleFonts.poppins(
                                fontWeight: FontWeight.bold,
                                fontSize: 16,
                                color: primaryGreen,
                              ),
                            ),
                          ),
                        ],
                      ),


                      SizedBox(
                        height: height * 0.012,
                      ),
                      Row(
                        mainAxisAlignment: MainAxisAlignment.spaceAround,
                        crossAxisAlignment: CrossAxisAlignment.center,
                        children: [
                          GestureDetector(
                            onTap: () {
                              print("google sign in on action:");
                              // googleLogin(context);
                              Navigator.push(context, MaterialPageRoute(builder: (context)=>post()));
                            },
                            child: Container(
                                height: height / 14.5,
                                width:width-40,
                                padding: const EdgeInsets.all(18),
                                decoration: BoxDecoration(
                                  color: primaryBlack,
                                  borderRadius: BorderRadius.circular(10),
                                ),
                                child: Row(
                                  mainAxisAlignment: MainAxisAlignment.center,
                                  children: [Image.asset(
                                    "assets/images/Google.png",
                                    fit: BoxFit.scaleDown,
                                  ),
                                    const SizedBox(width: 10,),
                                    Text("Google",style: GoogleFonts.poppins(
                                      color: Colors.white,
                                      fontSize: 20,
                                      fontWeight: FontWeight.w600,
                                    ),)
                               ] )),
                          ),

                        ],
                      ),
                      // Expanded(
                      //     flex: -1,
                      //     child: Container()),
                    ]),
              ),
            ],
          ),
        ),
      ),
    );
  }
}

class Signincard extends StatefulWidget {
  const Signincard({
    super.key,
    required iconimage,
    required ontap,
  });

  @override
  State<Signincard> createState() => _SignincardState();
}

class _SignincardState extends State<Signincard> {
  late Image iconimage;
  late Function ontap;
  @override
  Widget build(BuildContext context) {
    return Expanded(
        child: GestureDetector(
          onTap: ontap(),
          child: Container(
            margin: EdgeInsets.all(10),
            padding: EdgeInsets.all(20),
            decoration: BoxDecoration(
              color: textFieldBg,
              borderRadius: BorderRadius.circular(10),
            ),
            child: iconimage,
          ),
        ));
  }
}