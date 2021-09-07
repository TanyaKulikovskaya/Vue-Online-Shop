<template>
  <footer class="footer">
      <div class="wrapper">
          <p>{{ authorText }}.</p>
          <p>&copy; {{date}}. {{ copyrightText | formattedTitle }}.</p>
      </div>
  </footer>
</template>

<script>
import constants from '../../services/constants';
export default {
    name: 'the-footer',
    data() {
        return {
            authorText: constants.FOOTER.AUTHOR_TEXT,
            copyrightText: constants.FOOTER.COPYRIGHT_TEXT,
            date: new Date().getFullYear()
        }
    }
}
</script>

<style lang="scss">
    .footer {
        background-color: $light-gray;
        height: 70px;
        padding-top: $padding;
        padding-bottom: $padding;
    }
</style>