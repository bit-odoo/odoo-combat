import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:odoo_app/Colors.dart';
import 'package:intl/intl.dart';
import 'categoryDropedown.dart';
class post extends StatefulWidget {
  const post({super.key});

  @override
  State<post> createState() => _postState();
}

class _postState extends State<post> {
  String selectedDate = "";
  @override
  void initState() {
    selectedDate = DateFormat("dd-MM-yyyy").format(DateTime.now()); //set the initial value of text field
    print(selectedDate);
    super.initState();
  }

  String? selectedCategory='Large Appliances';
  List<String> allCategories = ['Large Appliances', 'Small Appliances', 'Toys', 'Sport Equipments','Lighting Equipment','It & Telecomunication','Medical Devices'];
  @override
  Widget build(BuildContext context) {
    double height = MediaQuery.of(context).size.height;
    double width = MediaQuery.of(context).size.width;
    return Scaffold(
      backgroundColor: bacckground,
      body: Padding(
        padding: EdgeInsets.symmetric(horizontal: 20),
        child: SingleChildScrollView(
          child: Column(
            mainAxisAlignment: MainAxisAlignment.start,
            crossAxisAlignment: CrossAxisAlignment.center,
            children: [
              Container(
                margin: const EdgeInsets.fromLTRB(0, 90, 0, 0),
                child: Form(
                  // key: formKey,
                  child: Column(
                    mainAxisAlignment: MainAxisAlignment.center,
                    crossAxisAlignment: CrossAxisAlignment.stretch,
                    children: [
                      //Username
                      Text(
                        "Product Name",
                        style: TextStyle(
                          color: primaryBlack,
                          fontSize: 16,
                          fontWeight: FontWeight.bold,
                        ),
                      ),
                      const SizedBox(height: 8),
                      TextFormField(
                        // controller: emailController,
                        enableSuggestions: true,
                        style: GoogleFonts.poppins(
                          color: primaryBlack,
                          fontWeight: FontWeight.w400,
                          fontSize: 14,
                          letterSpacing: 1,
                        ),
                        keyboardType: TextInputType.emailAddress,
                        autofillHints: const [AutofillHints.email],
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
                          hintText: 'Product Name',
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
                        "Qauntity",
                        style: TextStyle(
                          color: primaryBlack,
                          fontSize: 16,
                          fontWeight: FontWeight.bold,
                        ),
                      ),
                      const SizedBox(height: 8),
                      TextFormField(
                        // controller: emailController,
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
                          hintText: 'Qaubtity',
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
                        "Estimated Price",
                        style: TextStyle(
                          color: primaryBlack,
                          fontSize: 16,
                          fontWeight: FontWeight.bold,
                        ),
                      ),
                      const SizedBox(height: 8),
                      TextFormField(
                        // controller: emailController,
                        enableSuggestions: true,
                        style: GoogleFonts.poppins(
                          color: primaryBlack,
                          fontWeight: FontWeight.w400,
                          fontSize: 14,
                          letterSpacing: 1,
                        ),
                        keyboardType: TextInputType.emailAddress,
                        autofillHints: const [AutofillHints.email],
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
                          hintText: 'Estimated Price',
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
                      const SizedBox(height: 8),
                      Container(
                        child: Column(
                          children: [
                            const Text(
                              "Date Of Birth",
                              style: TextStyle(
                                color: Colors.white,
                                fontSize: 16,
                                fontWeight: FontWeight.bold,
                              ),
                            ),
                            const SizedBox(height: 8),
                            Container(
                              width: double.infinity,
                              height: 50,
                              child: ElevatedButton(

                                onPressed: () async{
                                  // Show date picker here
                                  DateTime? pickedDate = await showDatePicker(
                                      context: context,
                                      initialDate: DateTime.now(),
                                      firstDate: DateTime(1950),
                                      //DateTime.now() - not to allow to choose before today.
                                      lastDate: DateTime(2100));
                                  String formattedDate =
                                  DateFormat('dd-MM-yyyy').format(pickedDate!);
                                  setState(() {
                                    print(formattedDate);
                                    selectedDate = formattedDate;
                                    print(selectedDate);
                                    //set output date to TextField value.
                                  });
                                },
                                style: ElevatedButton.styleFrom(
                                  backgroundColor : primaryGreen// Background color
                                ),
                                child: Text( selectedDate,
                                    style: const TextStyle(
                                        color: Colors.white,
                                        fontSize: 18,
                                        fontWeight: FontWeight.w600
                                    )
                                ),
                              ),
                            ),
                            const SizedBox(height: 8),
                            // Show selected date if available
                            const Text(
                              "Category",
                              style: TextStyle(
                                color: Colors.white,
                                fontSize: 16,
                                fontWeight: FontWeight.bold,
                              ),
                            ),
                            const SizedBox(height: 8),
                            categoryDropdown(
                              selectedCategory: selectedCategory,
                              allCategories: allCategories,
                              onChanged: (value) {
                                setState(() {
                                  selectedCategory = value;
                                });
                              },
                            ),
                            const SizedBox(height: 8),
                          ],
                        ),
                      ),
                      const SizedBox(height: 8),
                      Text(
                        "Wight of Item",
                        style: TextStyle(
                          color: primaryBlack,
                          fontSize: 16,
                          fontWeight: FontWeight.bold,
                        ),
                      ),
                      const SizedBox(height: 8),
                      TextFormField(
                        // controller: emailController,
                        enableSuggestions: true,
                        style: GoogleFonts.poppins(
                          color: primaryBlack,
                          fontWeight: FontWeight.w400,
                          fontSize: 14,
                          letterSpacing: 1,
                        ),
                        keyboardType: TextInputType.emailAddress,
                        autofillHints: const [AutofillHints.email],
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
                          hintText: 'Wight of Item',
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
                      const SizedBox(height: 8),
                      Text(
                        "Size of Item",
                        style: TextStyle(
                          color: primaryBlack,
                          fontSize: 16,
                          fontWeight: FontWeight.bold,
                        ),
                      ),
                      const SizedBox(height: 8),
                      TextFormField(
                        // controller: emailController,
                        enableSuggestions: true,
                        style: GoogleFonts.poppins(
                          color: primaryBlack,
                          fontWeight: FontWeight.w400,
                          fontSize: 14,
                          letterSpacing: 1,
                        ),
                        keyboardType: TextInputType.emailAddress,
                        autofillHints: const [AutofillHints.email],
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
                          hintText: 'Size of Item',
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
                      const SizedBox(height: 30),
                      Text(
                        "Small Description",
                        style: TextStyle(
                          color: primaryBlack,
                          fontSize: 16,
                          fontWeight: FontWeight.bold,
                        ),
                      ),
                      const SizedBox(height: 8),
                      TextFormField(
                        // controller: emailController,
                        enableSuggestions: true,
                        style: GoogleFonts.poppins(
                          color: primaryBlack,
                          fontWeight: FontWeight.w400,
                          fontSize: 14,
                          letterSpacing: 1,
                        ),
                        keyboardType: TextInputType.emailAddress,
                        autofillHints: const [AutofillHints.email],
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
                          hintText: 'Small Description',
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
                      const SizedBox(height: 30),
                      SizedBox(
                        // margin: EdgeInsets.fromLTRB(0,, 0, 5),
                        width: double.infinity,
                        height: height / 17.3,
                        child: ElevatedButton(
                          onPressed: () => {
                            // if (formKey.currentState!.validate())
                            //   {
                            //     print("Validation done"),
                            //     // login(emailController.text.toString(), passwordController.text.toString())
                            //   },

                          },
                          style: ButtonStyle(
                            backgroundColor:
                            MaterialStatePropertyAll(primaryBlack),
                            shape: MaterialStateProperty.all<
                                RoundedRectangleBorder>(
                              RoundedRectangleBorder(
                                  borderRadius: BorderRadius.circular(10),
                                  side:
                                  BorderSide(color: primaryBlack)),
                            ),
                          ),
                          child: Text(
                            "Post Ad",
                            style: GoogleFonts.poppins(
                              fontSize: 18,
                              fontWeight: FontWeight.w800,
                              color: Colors.white,
                            ),
                          ),
                        ),
                      ),
                      const SizedBox(height: 50),
                          ],
                        ),
                      ),

                  ),
            ],
          ),
        ),
      ),
    );
  }
}
