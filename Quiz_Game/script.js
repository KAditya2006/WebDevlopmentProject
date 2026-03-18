   const quizData = [
      {
        question: "What does HTML stand for?",
        options: ["Hyper Text Markup Language", "High Tech Modern Language", "Home Tool Markup Language"],
        answer: "Hyper Text Markup Language"
      },
      {
        question: "Which CSS property changes text color?",
        options: ["background-color", "font-style", "color"],
        answer: "color"
      },
      {
        question: "Which symbol is used for comments in JavaScript?",
        options: ["//", "/* */", "#"],
        answer: "//"
      }
    ];

    const questionEl = document.getElementById("question");
    const optionsEl = document.getElementById("options");
    const nextBtn = document.getElementById("next-btn");

    let currentQuestion = 0;
    let score = 0;

    function showQuestion() {
      resetState();
      let q = quizData[currentQuestion];
      questionEl.innerText = q.question;
      q.options.forEach(option => {
        const btn = document.createElement("button");
        btn.innerText = option;
        btn.classList.add("option-btn");
        btn.addEventListener("click", () => selectAnswer(btn, q.answer));
        optionsEl.appendChild(btn);
      });
    }

    function resetState() {
      nextBtn.style.display = "none";
      optionsEl.innerHTML = "";
    }

    function selectAnswer(btn, correctAnswer) {
      const allBtns = document.querySelectorAll(".option-btn");
      allBtns.forEach(b => {
        b.disabled = true;
        if (b.innerText === correctAnswer) {
          b.classList.add("correct");
        }
      });
      if (btn.innerText === correctAnswer) {
        score++;
      } else {
        btn.classList.add("wrong");
      }
      nextBtn.style.display = "block";
    }

    function showResult() {
      resetState();
      questionEl.innerText = `You scored ${score} out of ${quizData.length}! 🎉`;
      nextBtn.innerText = "Play Again";
      nextBtn.style.display = "block";
    }

    nextBtn.addEventListener("click", () => {
      currentQuestion++;
      if (currentQuestion < quizData.length) {
        showQuestion();
      } else {
        showResult();
      }
    });

    showQuestion();