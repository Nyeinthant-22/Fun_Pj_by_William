// Tab switching functionality
document.addEventListener('DOMContentLoaded', function() {
    const navButtons = document.querySelectorAll('.nav-btn');
    const calculatorSections = document.querySelectorAll('.calculator-section');

    navButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetTab = this.dataset.tab;

            // Remove active class from all buttons and sections
            navButtons.forEach(btn => btn.classList.remove('active'));
            calculatorSections.forEach(section => section.classList.remove('active'));

            // Add active class to clicked button and corresponding section
            this.classList.add('active');
            document.getElementById(targetTab).classList.add('active');
        });
    });
});

// Utility functions
function formatCurrency(amount) {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    }).format(amount);
}

function formatPercentage(rate) {
    return (rate).toFixed(2) + '%';
}

function showResult(elementId, content, isSuccess = true) {
    const resultElement = document.getElementById(elementId);
    resultElement.innerHTML = content;
    resultElement.className = isSuccess ? 'result success' : 'result';
}

function validateInputs(inputs) {
    for (let input of inputs) {
        const value = parseFloat(input.value);
        if (isNaN(value) || value <= 0) {
            return false;
        }
    }
    return true;
}

// Simple Interest Calculator
function calculateSimpleInterest() {
    const principal = document.getElementById('si-principal');
    const rate = document.getElementById('si-rate');
    const time = document.getElementById('si-time');

    if (!validateInputs([principal, rate, time])) {
        showResult('si-result', 'Please enter valid positive numbers for all fields.', false);
        return;
    }

    const P = parseFloat(principal.value);
    const R = parseFloat(rate.value);
    const T = parseFloat(time.value);

    // Simple Interest Formula: SI = (P * R * T) / 100
    const simpleInterest = (P * R * T) / 100;
    const totalAmount = P + simpleInterest;

    const resultHTML = `
        <div>
            <strong>Simple Interest Calculation</strong><br><br>
            Principal Amount: ${formatCurrency(P)}<br>
            Interest Rate: ${formatPercentage(R)} per year<br>
            Time Period: ${T} year(s)<br><br>
            <span class="result-highlight">Interest Earned: ${formatCurrency(simpleInterest)}</span>
            <span class="result-highlight">Total Amount: ${formatCurrency(totalAmount)}</span>
        </div>
    `;

    showResult('si-result', resultHTML);
}

// Compound Interest Calculator
function calculateCompoundInterest() {
    const principal = document.getElementById('ci-principal');
    const rate = document.getElementById('ci-rate');
    const time = document.getElementById('ci-time');
    const frequency = document.getElementById('ci-frequency');

    if (!validateInputs([principal, rate, time])) {
        showResult('ci-result', 'Please enter valid positive numbers for all fields.', false);
        return;
    }

    const P = parseFloat(principal.value);
    const R = parseFloat(rate.value);
    const T = parseFloat(time.value);
    const N = parseFloat(frequency.value);

    // Compound Interest Formula: A = P(1 + r/n)^(nt)
    const r = R / 100;
    const totalAmount = P * Math.pow((1 + r/N), N * T);
    const compoundInterest = totalAmount - P;

    const frequencyText = {
        1: 'Annually',
        2: 'Semi-Annually', 
        4: 'Quarterly',
        12: 'Monthly',
        365: 'Daily'
    };

    const resultHTML = `
        <div>
            <strong>Compound Interest Calculation</strong><br><br>
            Principal Amount: ${formatCurrency(P)}<br>
            Interest Rate: ${formatPercentage(R)} per year<br>
            Time Period: ${T} year(s)<br>
            Compounding: ${frequencyText[N]}<br><br>
            <span class="result-highlight">Interest Earned: ${formatCurrency(compoundInterest)}</span>
            <span class="result-highlight">Total Amount: ${formatCurrency(totalAmount)}</span>
        </div>
    `;

    showResult('ci-result', resultHTML);
}

// Loan Payment Calculator
function calculateLoanPayment() {
    const loanAmount = document.getElementById('loan-amount');
    const rate = document.getElementById('loan-rate');
    const term = document.getElementById('loan-term');

    if (!validateInputs([loanAmount, rate, term])) {
        showResult('loan-result', 'Please enter valid positive numbers for all fields.', false);
        return;
    }

    const P = parseFloat(loanAmount.value);
    const R = parseFloat(rate.value);
    const T = parseFloat(term.value);

    // Monthly interest rate
    const monthlyRate = (R / 100) / 12;
    const numberOfPayments = T * 12;

    let monthlyPayment, totalPayment, totalInterest;

    if (R === 0) {
        // If interest rate is 0%
        monthlyPayment = P / numberOfPayments;
        totalPayment = P;
        totalInterest = 0;
    } else {
        // Monthly Payment Formula: M = P * [r(1+r)^n] / [(1+r)^n - 1]
        const numerator = monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments);
        const denominator = Math.pow(1 + monthlyRate, numberOfPayments) - 1;
        monthlyPayment = P * (numerator / denominator);
        totalPayment = monthlyPayment * numberOfPayments;
        totalInterest = totalPayment - P;
    }

    const resultHTML = `
        <div>
            <strong>Loan Payment Calculation</strong><br><br>
            Loan Amount: ${formatCurrency(P)}<br>
            Interest Rate: ${formatPercentage(R)} per year<br>
            Loan Term: ${T} year(s)<br><br>
            <span class="result-highlight">Monthly Payment: ${formatCurrency(monthlyPayment)}</span>
            <span class="result-highlight">Total Interest: ${formatCurrency(totalInterest)}</span>
            <span class="result-highlight">Total Payment: ${formatCurrency(totalPayment)}</span>
        </div>
    `;

    showResult('loan-result', resultHTML);
}

// Savings Goal Calculator
function calculateSavingsGoal() {
    const goal = document.getElementById('savings-goal');
    const rate = document.getElementById('savings-rate');
    const monthly = document.getElementById('savings-monthly');

    if (!validateInputs([goal, rate, monthly])) {
        showResult('savings-result', 'Please enter valid positive numbers for all fields.', false);
        return;
    }

    const FV = parseFloat(goal.value);
    const R = parseFloat(rate.value);
    const PMT = parseFloat(monthly.value);

    const monthlyRate = (R / 100) / 12;

    let timeToGoal;

    if (R === 0) {
        // If interest rate is 0%
        timeToGoal = FV / PMT;
    } else {
        // Future Value of Annuity Formula rearranged to solve for time
        // FV = PMT * [((1 + r)^n - 1) / r]
        // Solving for n: n = ln(1 + (FV * r) / PMT) / ln(1 + r)
        if (FV * monthlyRate / PMT < -1) {
            showResult('savings-result', 'Your monthly contribution is too low to reach your goal with this interest rate.', false);
            return;
        }
        
        timeToGoal = Math.log(1 + (FV * monthlyRate) / PMT) / Math.log(1 + monthlyRate);
    }

    const years = Math.floor(timeToGoal / 12);
    const months = Math.ceil(timeToGoal % 12);
    const totalContributions = PMT * timeToGoal;
    const interestEarned = FV - totalContributions;

    let timeText = '';
    if (years > 0) {
        timeText += `${years} year${years > 1 ? 's' : ''}`;
        if (months > 0) {
            timeText += ` and ${months} month${months > 1 ? 's' : ''}`;
        }
    } else {
        timeText = `${Math.ceil(timeToGoal)} month${Math.ceil(timeToGoal) > 1 ? 's' : ''}`;
    }

    const resultHTML = `
        <div>
            <strong>Savings Goal Calculation</strong><br><br>
            Savings Goal: ${formatCurrency(FV)}<br>
            Interest Rate: ${formatPercentage(R)} per year<br>
            Monthly Contribution: ${formatCurrency(PMT)}<br><br>
            <span class="result-highlight">Time to Goal: ${timeText}</span>
            <span class="result-highlight">Total Contributions: ${formatCurrency(totalContributions)}</span>
            <span class="result-highlight">Interest Earned: ${formatCurrency(Math.max(0, interestEarned))}</span>
        </div>
    `;

    showResult('savings-result', resultHTML);
}

// Add keyboard support for calculations
document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        const activeSection = document.querySelector('.calculator-section.active');
        if (activeSection) {
            const calculateBtn = activeSection.querySelector('.calculate-btn');
            if (calculateBtn) {
                calculateBtn.click();
            }
        }
    }
});

// Input validation on keyup for better UX
document.addEventListener('input', function(event) {
    if (event.target.type === 'number') {
        const value = parseFloat(event.target.value);
        if (value < 0) {
            event.target.value = '';
        }
    }
});

// Add smooth animations for form interactions
document.querySelectorAll('input, select').forEach(element => {
    element.addEventListener('focus', function() {
        this.parentElement.style.transform = 'scale(1.02)';
    });
    
    element.addEventListener('blur', function() {
        this.parentElement.style.transform = 'scale(1)';
    });
});