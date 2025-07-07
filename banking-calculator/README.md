# Banking Calculator - Modern Financial Tools

A sleek, modern banking calculator application with a beautiful black and white theme, featuring shadow effects and clean UI design. Calculate various financial metrics including interest, loans, and savings goals.

## Features

### 🏦 Financial Calculators

1. **Simple Interest Calculator**
   - Calculate interest earned on a principal amount
   - Input: Principal, Interest Rate, Time Period
   - Output: Interest Earned, Total Amount

2. **Compound Interest Calculator**
   - Calculate compound interest with different compounding frequencies
   - Input: Principal, Interest Rate, Time Period, Compounding Frequency
   - Output: Interest Earned, Total Amount
   - Supports: Annual, Semi-Annual, Quarterly, Monthly, Daily compounding

3. **Loan Payment Calculator**
   - Calculate monthly loan payments and total interest
   - Input: Loan Amount, Interest Rate, Loan Term
   - Output: Monthly Payment, Total Interest, Total Payment

4. **Savings Goal Calculator**
   - Calculate time needed to reach a savings goal
   - Input: Savings Goal, Interest Rate, Monthly Contribution
   - Output: Time to Goal, Total Contributions, Interest Earned

### 🎨 Design Features

- **Modern Black & White Theme**: Elegant monochromatic design
- **Shadow Effects**: Beautiful depth and dimension with multiple shadow layers
- **Clean UI**: Minimalist interface with smooth animations
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Glassmorphism**: Modern translucent card designs with backdrop blur
- **Smooth Transitions**: Engaging hover effects and micro-interactions

### 💻 Technical Features

- **No Dependencies**: Pure HTML, CSS, and JavaScript
- **Form Validation**: Real-time input validation and error handling
- **Keyboard Support**: Press Enter to calculate in any section
- **Currency Formatting**: Professional currency and percentage formatting
- **Tab Navigation**: Easy switching between different calculators
- **Accessibility**: Semantic HTML and keyboard navigation support

## Usage

### Getting Started

1. Open `index.html` in any modern web browser
2. Select the calculator you want to use from the navigation tabs
3. Enter the required values in the input fields
4. Click "Calculate" or press Enter to see results

### Calculator Instructions

#### Simple Interest
- Enter the principal amount you're investing or borrowing
- Specify the annual interest rate as a percentage
- Set the time period in years (decimals allowed)

#### Compound Interest
- Input the same values as simple interest
- Additionally select how often interest compounds (annually to daily)

#### Loan Payment
- Enter the total loan amount
- Specify the annual interest rate
- Set the loan term in years

#### Savings Goal
- Enter your target savings amount
- Specify the expected annual interest rate
- Input how much you plan to save monthly

## File Structure

```
banking-calculator/
├── index.html          # Main HTML structure
├── style.css           # Modern styling with black/white theme
├── script.js           # Financial calculations and interactions
└── README.md           # This documentation
```

## Browser Compatibility

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Any modern browser supporting ES6+

## Customization

The app uses CSS custom properties and modular JavaScript, making it easy to customize:

- **Colors**: Modify the rgba values in `style.css`
- **Animations**: Adjust transition durations and easing functions
- **Calculations**: Add new formulas in `script.js`
- **Layout**: Responsive grid system can be easily modified

## Mathematical Formulas

### Simple Interest
```
SI = (P × R × T) / 100
Total Amount = P + SI
```

### Compound Interest
```
A = P(1 + r/n)^(nt)
Compound Interest = A - P
```

### Loan Payment (Monthly)
```
M = P × [r(1+r)^n] / [(1+r)^n - 1]
Where: r = monthly rate, n = total payments
```

### Savings Goal (Time Calculation)
```
n = ln(1 + (FV × r) / PMT) / ln(1 + r)
Where: FV = future value, PMT = payment, r = monthly rate
```

## Performance

- Lightweight: < 50KB total size
- Fast loading: No external dependencies
- Smooth animations: 60fps transitions
- Mobile optimized: Touch-friendly interface

## License

This project is open source and available under the MIT License.

---

**BankCalc** - Modern Financial Calculations Made Simple