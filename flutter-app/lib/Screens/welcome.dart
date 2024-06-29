
import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:odoo_app/Colors.dart';

import 'Login.dart';
enum usertype {
  Individual,
  business,
  no,
}
usertype selectedUsertype = usertype.no;
class welcomepage extends StatefulWidget {
  const welcomepage({super.key});

  @override
  State<welcomepage> createState() => _welcomepageState();
}

class _welcomepageState extends State<welcomepage> {
  String _value = "Individual";

  bool isselected = false;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: bacckground,
      body: Padding(
        padding: const EdgeInsets.symmetric(horizontal: 20),
        child: Column(
          mainAxisAlignment: MainAxisAlignment.start,
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Expanded(child:Container()),
            Expanded(
              //text to give
                child: Container(
              child: Column(
                crossAxisAlignment:CrossAxisAlignment.start,
                  children: [Text("To Give",style: GoogleFonts.poppins(
                    fontWeight: FontWeight.w600,
                    fontSize: 28,
                    letterSpacing: .5,
                    color: primaryBlack,
              ),),Text("Your Gadget",style: GoogleFonts.poppins(
                fontWeight: FontWeight.w800,
                fontSize: 38,
                letterSpacing: .5,
                color: primaryGreen,
              ),),Text("a Second Life",style:  GoogleFonts.poppins(
                    fontWeight: FontWeight.w600,
                    fontSize: 28,
                    color: primaryBlack,
                    letterSpacing: .5,),)]),
            )),

            Expanded(child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
                mainAxisAlignment: MainAxisAlignment.start,
                children:[
                  //join as
                  Row(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: [Text("Join",style: GoogleFonts.poppins(
                      fontWeight: FontWeight.w700,
                      fontSize: 30,
                      color: primaryBlack,
                      letterSpacing: .5),
                  ),
                    SizedBox(width: 7,),
                    Text("As",style:  GoogleFonts.poppins(
                      fontWeight: FontWeight.w700,
                      fontSize: 30,
                      color: primaryGreen,
                      letterSpacing: .5),
                  )]
                )])),
                  Column(
                    children: [
                      //usertypes
                      Container(
                        height: 60,
                        decoration: BoxDecoration(
                          color: const Color(0xffFDFDFD),
                          borderRadius: BorderRadius.circular(10),
                          border: Border.all(color: selectedUsertype == usertype.Individual ? primaryGreen: cardStroke,width: 2),
                          boxShadow:const [
                            BoxShadow(
                              color:Color(0x41c0c0c0),
                              blurRadius: 14,
                            )
                          ]

                        ),
                        child:
                        Center(
                          child: RadioListTile(value: "Individual",onChanged:(value){
                            setState(() {
                              _value= value!;
                              selectedUsertype = usertype.Individual;
                            });

                          }, groupValue:_value,activeColor:primaryGreen,title:Text("Individual",style:GoogleFonts.poppins(
                            fontWeight: FontWeight.w400,fontSize: 16,
                          ),) ,

                          ),
                        )),
                      const SizedBox(height: 10,),
                      Container(
                        height: 60,
                        decoration: BoxDecoration(
                          color: const Color(0xffFDFDFD),
                          borderRadius: BorderRadius.circular(10),
                          border: Border.all(color: selectedUsertype == usertype.business ?primaryGreen:cardStroke,width: 2),
                          boxShadow:const [
                            BoxShadow(
                              color:Color(0x41c0c0c0),
                              blurRadius: 14,
                            )
                          ]

                        ),
                        child:
                        Center(
                          child: RadioListTile(value: "Business",onChanged:(value){
                            setState(() {
                              _value= value!;
                              selectedUsertype = usertype.business;
                            });
                          }, groupValue:_value,activeColor:primaryGreen,title:Text("Business",style:GoogleFonts.poppins(
                            fontWeight: FontWeight.w400,fontSize: 16,
                          ),) ,

                          ),
                        )),

                          ],
                        ),

            Expanded(
                flex: 1,
                child: GestureDetector(
                  onTap: ()=>{
                    Navigator.push(context, MaterialPageRoute(builder: (context)=>Login()))
                  },
                  child: Container(margin: EdgeInsets.symmetric(vertical: 70),
                    decoration: BoxDecoration(
                        color: primaryBlack,
                        borderRadius: BorderRadius.circular(10),

                    ),
                                width: double.infinity,
                                child: Center(
                  child: Text("Continue",style: GoogleFonts.poppins(
                    fontSize: 18,
                    fontWeight: FontWeight.w800,
                    color: Colors.white

                  ),),
                                ),
                              ),
                )),
                    ],
                  )
      )
    );
  }
}
