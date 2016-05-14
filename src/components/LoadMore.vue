<template>
  <div class="load-more">
    <div class="spinner-container">
      <span class="dot dot-1"></span>
      <span class="dot dot-2"></span>
      <span class="dot dot-3"></span>
    </div>
  </div>
</template>

<style>
@-webkit-keyframes bounce {
  0%,80%,to {
      transform: scale(0)
  }

  40% {
      transform: scale(1)
  }
}

@keyframes bounce {
  0%,80%,to {
      transform: scale(0)
  }

  40% {
      transform: scale(1)
  }
}

.spinner-container {
  padding: 14px;
  text-align: center
}

.spinner-container .dot {
  display: inline-block;
  width: 12px;
  height: 12px;
  margin: 0 3px;
  background-color: #ccc;
  border-radius: 100%;
  animation: bounce 1.6s infinite ease-in-out;
  animation-fill-mode: both
}

.spinner-container .dot-1 {
  animation-delay: -.32s
}

.spinner-container .dot-2 {
  animation-delay: -.16s
}
</style>
