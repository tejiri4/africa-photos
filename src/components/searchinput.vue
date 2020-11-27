<template>
 <div class="search">
    <div class="search__input" v-if="searchState === ''">
      <span class="search__input__search-icon" @click="startSearching">
        <img src="../assets/search-interface-symbol.svg" alt="search" />
      </span>
      <input placeholder="Search for photo" :value="keyword" @input="handleInputChange" autofocus/>
    </div>
     <div v-if="searchState === 'ended'">
       <h1>Search Result for <span>"{{ keyword }}"</span></h1>
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
    startSearching: Function
  }
}
</script>
<style lang="scss" scoped>
.search {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &__input {
    width: 60%;
    background: #fff;
    height: 60px;
    border-radius: 6px;
    display: flex;
    align-items: center;

    &__search-icon {
      cursor: pointer;
      flex: 0.1;
    }

    img {
      width: 20px;
      height: 20px;
      flex: 0.1;
    }

    input {
      border: none;
      flex: 0.9;
      height: 100%;
      outline: none;
      border-radius: 6px;
    }
  }
} 
</style>