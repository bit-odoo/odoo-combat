import 'package:flutter/material.dart';
import 'package:odoo_app/Colors.dart';
import 'package:odoo_app/Screens/welcome.dart';
class SplashScreen extends StatefulWidget {
  const SplashScreen({super.key});

  @override
  State<SplashScreen> createState() => _SplashScreenState();
}

class _SplashScreenState extends State<SplashScreen> {

  void initState(){
    super.initState();

    Future.delayed(Duration(seconds: 3),(){
      Navigator.push(context, MaterialPageRoute(builder: (context)=>const welcomepage()));
  });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: bacckground,
      body: Center(
        child: SizedBox(
            child: Image.asset("assets/images/Logo.png")),
      ),
    );
  }
}


