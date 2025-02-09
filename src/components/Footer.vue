<script setup>
import {
  Facebook,
  Instagram,
  Youtube,
  Linkedin,
  Twitter,
  ChevronRight,
  MapPin,
  Mail,
  Phone,
} from "lucide-vue-next"
</script>

<template>
  <footer id="footer">
    <div class="footer_about">
      <div class="footer_about_desc">
        <h3>About Us</h3>
        <p>
          Browse our extensive collection of recipes that includes thousands of
          recipes for cookies, cakes, breads, rolls and main dishe
        </p>
      </div>
      <div class="footer_about_contact">
        <p>
          <span><MapPin /></span>Athens, Greece
        </p>
        <p>
          <span><Mail /></span>info@email.com
        </p>
        <p>
          <span><Phone /></span>+123 456 679 123
        </p>
      </div>
    </div>
    <div class="footer_links">
      <h3>Quick Links</h3>
      <ul>
        <li><ChevronRight />About Us</li>
        <li><ChevronRight />Submit Your Recipe</li>
        <li><ChevronRight />Privacy Policy</li>
        <li><ChevronRight />Terms & Conditions</li>
        <li><ChevronRight />Submit Your Photos</li>
      </ul>
    </div>
    <div class="footer_courses">
      <h3>Courses</h3>
      <ul>
        <li><ChevronRight />Appetizers</li>
        <li><ChevronRight />Breads & Rolls</li>
        <li><ChevronRight />Condiments</li>
        <li><ChevronRight />Desserts</li>
        <li><ChevronRight />Dinners</li>
      </ul>
    </div>
    <div class="footer_recent">
      <h3>Recent Recipes</h3>
      <div>
        <img src="" alt="" />
        <div>
          <h4></h4>
          <p></p>
        </div>
      </div>
    </div>
    <div class="footer_social">
      <h3>Social Links</h3>
      <ul>
        <li><Twitter /></li>
        <li><Linkedin /></li>
        <li><Facebook /></li>
        <li><Youtube /></li>
        <li><Instagram /></li>
      </ul>
    </div>
  </footer>
</template>
