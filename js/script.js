// Copyright (c) 2022 Ms Raffin All rights reserved
//
// Created by: Ms Raffin
// Created on: Sep 2022
// This file contains the JS functions for index.html

function enterClicked () {
  // this function gets user's sreet name and number and displays it back to user
  const TAX_RATE=0.2005
  
  // the number of hours worked by the user
  let hoursWorked = parseFloat(document.getElementById("hours-worked").value)
	
  // the hourly rate of the user
  let hourlyRate = parseFloat(document.getElementById("hourly-rate").value)

  // display name and number back to user
  document.getElementById('user-info').innerHTML = "Your Street Number is " + hoursWorked + " and you live on " + hourlyRate + "."
}