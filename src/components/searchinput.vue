<template>
 <div class="search" :class="searchState === '' && 'centered'">
    <form class="search__input" v-if="searchState === ''" action="" @submit="startSearching">
      <button class="search__button__search-icon" type="submit">
        <img src="../assets/search-interface-symbol.svg" alt="search" />
      </button>
      <input ty placeholder="Search for photo" :value="keyword" @input="handleInputChange" autofocus required v-on:keyup.enter="startSearching"/>
    </form>
     <div v-if="searchState === 'ended'" class="ended">
       <h1>Search Result for <span>"{{ keyword }}"</span></h1>
        <div @click="handleSearchAgain">
          <img src="../assets/search-interface-symbol.svg" alt="search" />
        </div>
     </div>
      <div v-if="searchState === 'searching'">
       <h1>Searching for <span>"{{ keyword }}"</span></h1>
     </div>
 </div>
</template>
<script>
export default {
  name: 'Search',
  props: {
    keyword: String,
    handleInputChange: Function,
    searchState: String,
    startSearching: Function,
    handleSearchAgain: Function
  }
}
</script>
<style lang="scss" scoped>
.search {
  width: 100%;
  display: flex;
  align-items: center;
  padding: 12%;

  span {
    color: #6D7B91;
  }
  
  &__input {
    width: 60%;
    background: #fff;
    height: 60px;
    border-radius: 6px;
    display: flex;
    align-items: center;

    &__search-icon {
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
    }

    img {
      width: 15px;
      height: 15px;
    }


    button {
      border: none;
      background: #fff;
      flex: 0.1;
      outline: none;
      cursor: pointer;
    }

    input {
      border: none;
      flex: 0.9;
      height: 100%;
      outline: none;
      border-radius: 6px;
    }
  }

  .ended {
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-grow: 1;

      > div {
        cursor: pointer;
      }

      img {
        width: 25px;
        height: 25px;
      }
  }

 @media only screen and (max-width: 480px) {
     h1 {
       font-size: 20px;
     }

     &__input {
       width: 80%;

        &__search-icon {
          flex: 0.2;
        }
     }
  }
} 

.centered {
  justify-content: center;
}
</style>