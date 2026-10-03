// Date of birth validation
const birthDate = new Date(dob);
const today = new Date();

if (isNaN(birthDate.getTime())) {
    return res.status(400).json({
        success: false,
        message: "Please enter a valid date of birth."
    });
}

// Calculate the date exactly 15 years ago
const minimumAgeDate = new Date(
    today.getFullYear() - 15,
    today.getMonth(),
    today.getDate()
);

// Student must be at least 15 years old
if (birthDate > minimumAgeDate) {
    return res.status(400).json({
        success: false,
        message: "You must be at least 15 years old to register."
    });
}
if (!/^[0-9]{10}$/.test(phone)) {
    return res.status(400).json({
        success: false,
        message: "Phone number must contain exactly 10 digits."
    });
}