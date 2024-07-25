<template>
  <div class="article-card l-site__width">
    <ul class="article-card__list l-3-cols">
      <li class="article-card__list--item" v-for="article in articles" :key="article.title">
        <article class="article-card__item">
          <figure class="article-card__thumbnail">
            <img class="article-card__image" :src="article.image" :alt="article.title">
          </figure>
          <div class="article-card__description--wrapper">
            <p class="article-card__description--text">{{ article.content }}</p>
            <a class="article-card__description--url" :href="article.buttonUrl">{{ article.buttontext }}</a>
          </div>
        </article>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "ArticleCard",
  data() {
    return {
      articles: [
        {
          "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud nim ad exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          "image": "https://via.placeholder.com/400x300",
          "buttontext": "READ MORE",
          "buttonUrl": "#"
        },
        {
          "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          "image": "https://via.placeholder.com/400x300",
          "buttontext": "READ MORE",
          "buttonUrl": "#"
        },
        {
          "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
          "image": "https://via.placeholder.com/400x300",
          "buttontext": "READ MORE",
          "buttonUrl": "#"
        }
      ]
    };
  }
};
</script>