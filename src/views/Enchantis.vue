<script setup>
</script>

<template>
  <section class="container">
    <h3>Enchantis Towne</h3>

    <div class="cafe story">
      <img src="../assets/cafe/daytime.jpg" alt="Rose's Cafe" />
      <p>
        Known for their amazing fresh daily donuts, Rose's cafe is a family owned business since 20XX!
        Whether you come to do homework, buy pastries, or to hang with friends. This bakery is the
        place to do it.
      </p>
    </div>

    <div class="library story">
      <img src="../assets/library/libraryday.jpg" alt="Uther's Library" />
      <p>
        Welcome to Uther's Library! Now don't be discourage to enter due to what the children
        in the neighborhood are saying about Uther. Uther is simply an elderly man who loves his
        books and welcomes anyone to come here for peace and quiet. That's a reason why
        Uther dislikes kids in his library!
      </p>
    </div>

    <div class="bedroom story">
      <img src="../assets/bedroom/roomday.jpg" alt="Your Room" />
      <p>
        This is your room silly! May not be to your taste but your mother herself states it's a guest bedroom
        now that you live closer to University of Enchantis. Don't let her into your room when she visits
        unless you want her to be disappointed in the "mess" when she sees the state of your room...
      </p>
    </div>

  </section>
</template>

<style scoped>
section.container{
  background-color:cornsilk;
  font-family:Apple Chancery, cursive;

  h3 {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  div.cafe{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;

    img {
      height: 400px;
      width: 400px;
    }
    p{
      text-align: center;
    }
  }

  div.library{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;

    img {
      height: 400px;
      width: 400px;
    }
    p{
      text-align: center;
    }
  }

  div.bedroom{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;

    img {
      height: 400px;
      width: 400px;
    }
    p{
      text-align: center;
    }
  }
}

</style>
