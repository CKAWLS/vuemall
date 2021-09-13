import BackTop from "../components/content/backTop/BackTop";

const scrollToTop = {
  data() {
    return {
      isUpToTop: false,
    }
  },
  components: {
    BackTop
  }
  ,
  methods: {
    backToTop() {
      this.$refs.scroll.scrollTo(0, 0)
    },
  }
}
export {scrollToTop}
