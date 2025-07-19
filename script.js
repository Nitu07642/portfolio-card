

 const words = ["Nitu Kumari", "Frontend Developer", "Prompt Engineer"];
    let i = 0, j = 0, current = '', isDeleting = false;
    const speed = 150;
    const display = document.getElementById("typewriter");

    function type() {
      if (i < words.length) {
        if (!isDeleting && j <= words[i].length) {
          current = words[i].substring(0, j++);
        } else if (isDeleting && j >= 0) {
          current = words[i].substring(0, j--);
        }
        display.innerHTML = current;
        if (!isDeleting && j === words[i].length + 1) {
          isDeleting = true;
          setTimeout(type, 1000);
        } else if (isDeleting && j === 0) {
          isDeleting = false;
          i = (i + 1) % words.length;
          setTimeout(type, 300);
        } else {
          setTimeout(type, speed);
        }
      }
    }
    type();

    function toggleTheme() {
      document.body.classList.toggle('light');
    }

    function downloadResume() {
      const a = document.createElement('a');
      a.href = 'https://example.com/Nitu_Resume.pdf';
      a.download = 'Nitu_Kumari_Resume.pdf';
      a.click();
    }

    function speakIntro() {
      const msg = new SpeechSynthesisUtterance("Hi, I'm Nitu Kumari. I'm a frontend developer passionate about React and user-friendly interfaces.");
      window.speechSynthesis.speak(msg);
    }