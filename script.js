        const heartBg = document.getElementById('heartBg');
        const hearts = ['❤️', '💕', '💖', '💗', '💝', '💘'];
        
        function createFloatingHeart() {
            const heart = document.createElement('div');
            heart.className = 'floating-heart';
            heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
            heart.style.left = Math.random() * 100 + '%';
            heart.style.animationDuration = (Math.random() * 5 + 5) + 's';
            heart.style.animationDelay = Math.random() * 5 + 's';
            heartBg.appendChild(heart);

            setTimeout(() => heart.remove(), 13000);
        }

        setInterval(createFloatingHeart, 800);
        for(let i = 0; i < 10; i++) {
            setTimeout(createFloatingHeart, i * 300);
        }

        const envelope = document.getElementById('envelope');
        const envelopeWrapper = document.getElementById('envelopeWrapper');
        const valentineCard = document.getElementById('valentineCard');

        envelopeWrapper.addEventListener('click', function() {
            envelope.classList.add('open');
            createHeartExplosion(window.innerWidth / 2, window.innerHeight / 2);
            
            setTimeout(() => {
                envelopeWrapper.style.opacity = '0';
                envelopeWrapper.style.transform = 'scale(0)';
                
                setTimeout(() => {
                    envelopeWrapper.classList.add('hidden');
                    valentineCard.classList.add('show');
                }, 500);
            }, 800);
        });

        const messageBox = document.getElementById('messageBox');
        const messageDisplay = document.getElementById('messageDisplay');
        const editBtn = document.getElementById('editBtn');

        messageBox.addEventListener('blur', function() {
            if (messageBox.value.trim()) {
                messageDisplay.textContent = messageBox.value;
                messageBox.classList.add('hidden');
                messageDisplay.classList.remove('hidden');
                editBtn.classList.remove('hidden');
            }
        });

        editBtn.addEventListener('click', function() {
            messageBox.classList.remove('hidden');
            messageDisplay.classList.add('hidden');
            editBtn.classList.add('hidden');
            messageBox.focus();
        });

        function createHeartExplosion(x, y) {
            const heartsAnimation = document.getElementById('heartsAnimation');
            const heartSymbols = ['❤️', '💕', '💖', '💗', '💝'];
            
            for (let i = 0; i < 15; i++) {
                const heart = document.createElement('div');
                heart.className = 'heart-particle';
                heart.textContent = heartSymbols[Math.floor(Math.random() * heartSymbols.length)];
                
                const angle = (Math.PI * 2 * i) / 15;
                const distance = Math.random() * 100 + 50;
                
                heart.style.left = x + Math.cos(angle) * distance + 'px';
                heart.style.top = y + Math.sin(angle) * distance + 'px';
                
                heartsAnimation.appendChild(heart);
                
                setTimeout(() => heart.remove(), 3000);
            }
        }

        valentineCard.addEventListener('click', function(e) {
            if (e.target !== messageBox && !e.target.closest('.photo-frame') && !e.target.closest('button')) {
                createHeartExplosion(e.clientX, e.clientY);
            }
        });