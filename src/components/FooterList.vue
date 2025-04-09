<template>
	<ul class="footer-list">
		<FooterItem v-for="(item, index) in footerItems" 
      :key="index" 
      :imgSrc="item.src" 
      :imgAlt="item.alt" 
      :route="item.route" 
    />
	</ul>
</template>
<script>
import bookIcon from "@/assets/icon/book.svg"
import homeIcon from "@/assets/icon/home.svg"
import infoIcon from "@/assets/icon/info.svg"
import FooterItem from './FooterItem.vue'
export default {
	components: {
		FooterItem
	},
	data() {
    return {
      footerItems: [
        { src: homeIcon, alt: "Home", route: "/" },
        { src: bookIcon, alt: "About", route: "/course/1" },
        { src: infoIcon, alt: "Contact", route: "/contact" }
      ]
    };
  }
}
</script>

<style>


/* FOOTER-LIST  */
.footer-list {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 16px 32px;
  border: 1px solid #F1F5F9FF;
  box-shadow: rgba(0, 0, 0, 0.5) 2px 2px 9px;
  list-style: none;
  background-color: var(--body-bg);
  border-radius: 18px;
}

@media only screen and (max-width: 768px) {
  .footer-list {
    border-radius: 10px;
  }
}
</style>