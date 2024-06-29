// gender_dropdown.dart

import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:odoo_app/Colors.dart';

class categoryDropdown extends StatelessWidget {
  final String? selectedCategory;
  final List<String> allCategories;
  final ValueChanged<String?> onChanged;

  const categoryDropdown({
    Key? key,
    required this.selectedCategory,
    required this. allCategories,
    required this.onChanged,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
      width: double.infinity,
      decoration: BoxDecoration(
        color: textFieldBg,
        borderRadius: BorderRadius.circular(8.0),
      ),
      child: Center(
        child: DropdownButton(
          value:  selectedCategory,
          hint: Text("Male",style: GoogleFonts.poppins(
              fontSize: 16,
              fontWeight: FontWeight.w400,
              color: primaryBlack
          ),),
          underline:Container(),
          items: allCategories.map((category) {
            return DropdownMenuItem(
              value: category,
              child: Text(
                category,
                style:TextStyle(color: primaryBlack),
              ),
            );
          }).toList(),
          onChanged: onChanged,
          icon:  Icon(Icons.arrow_drop_down, color: primaryBlack),
          dropdownColor:Colors.white,
        ),
      ),
    );
  }
}