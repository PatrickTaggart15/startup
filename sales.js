// script.js
document.addEventListener('DOMContentLoaded', function() {
    const accordionHeadings = document.querySelectorAll('.accordion-heading');
  
    accordionHeadings.forEach(heading => {
      heading.addEventListener('click', function() {
        // Toggle the active class to expand/collapse the accordion content
        this.parentElement.classList.toggle('active');
        const content = this.nextElementSibling;
        if (content.style.maxHeight) {
          // If content is expanded, collapse it
          content.style.maxHeight = null;
        } else {
          // If content is collapsed, expand it
          content.style.maxHeight = content.scrollHeight + 'px';
        }
      });
    });
  
    // Add event listeners for posting comments
    const commentButtons = document.querySelectorAll('.comment-btn');
  
    commentButtons.forEach(button => {
      button.addEventListener('click', function() {
        const commentInput = this.parentElement.querySelector('.comment-input');
        const commentText = commentInput.value.trim();
        if (commentText !== '') {
          const commentsContainer = this.parentElement.querySelector('.comments');
          const newComment = document.createElement('div');
          newComment.textContent = commentText;
          commentsContainer.appendChild(newComment);
          // Clear the comment input after posting
          commentInput.value = '';
        }
      });
    });
  });
  