<template>
  <div class="timeline">
    <div
      class="timeline__event animated fadeInUp delay-3s timeline__event--type1"
    >
      <div class="timeline__event__icon">
        <img src="../assets/img/timeline/school.png" alt="high school">
      </div>
      <div class="timeline__event__date">01-01-2015</div>
      <div class="timeline__event__content">
        <div class="timeline__event__title">High School</div>
        <div class="timeline__event__description">
          <p>
            My high school was integrated with the technical education in
            informatics where I had my first contact with programming and since
            2015 I have been loving the technology area.
          </p>
        </div>
      </div>
    </div>
    <div
      class="timeline__event animated fadeInUp delay-2s timeline__event--type2"
    >
      <div class="timeline__event__icon">
        <img src="../assets/img/timeline/graduation-hat.png" alt="college">
      </div>
      <div class="timeline__event__date">01-01-2018</div>
      <div class="timeline__event__content">
        <div class="timeline__event__title">College</div>
        <div class="timeline__event__description">
          <p>
            In 2018 I started my journey at the faculty of systems analysis and
            development at a Federal Institute in Picos/PI.
          </p>
        </div>
      </div>
    </div>
    <div
      class="timeline__event animated fadeInUp delay-1s timeline__event--type3"
    >
      <div class="timeline__event__icon">
        <img src="../assets/img/timeline/monitor.png" >
      </div>
      <div class="timeline__event__date">01-06-2018</div>
      <div class="timeline__event__content">
        <div class="timeline__event__title">Mambee</div>
        <div class="timeline__event__description">
          <p>
            I joined the program to develop real projects for local companies in
            order to have a better learning experience and really get to know
            how software production works, and everything was accompanied by the
            teachers.
          </p>
        </div>
      </div>
    </div>
    <div class="timeline__event animated fadeInUp timeline__event--type1">
      <div class="timeline__event__icon">
        <img src="../assets/img/timeline/web-development.png" alt="development">
      </div>
      <div class="timeline__event__date">01-03-2020</div>
      <div class="timeline__event__content">
        <div class="timeline__event__title">freelancer</div>
        <div class="timeline__event__description">
          <p>
            In 2020 during the pandemic, college goes online and I started
            freelancing for some people.
          </p>
        </div>
      </div>
    </div>
    <div class="timeline__event animated fadeInUp timeline__event--type2">
      <div class="timeline__event__icon">
        <img src="../assets/img/timeline/job.png" alt="job">
      </div>
      <div class="timeline__event__date">01-04-2021</div>
      <div class="timeline__event__content">
        <div class="timeline__event__title">First Job</div>
        <div class="timeline__event__description">
          <p>
            In the year 2021 I got my first job at Startup OpaxBox and that's
            where I work today.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  name: "timeline",
};
</script>
<style lang="scss" scoped>
* {
  box-sizing: border-box;
}
img {
  width: 40px;
}
h2 {
  margin: 5%;
  text-align: center;
  font-size: 2rem;
  font-weight: 100;
}
.timeline {
  display: flex;
  flex-direction: column;
  margin: $margin auto;
  position: relative;

  &__event {
    margin-bottom: $spacing;
    position: relative;
    display: flex;
    margin: $spacing 0;
    border-radius: $bdrs;
    align-self: center;
    width: 50vw;

    &:nth-child(2n + 1) {
      flex-direction: row-reverse;
      .timeline__event__date {
        border-radius: 0 $bdrs $bdrs 0;
      }
      .timeline__event__content {
        border-radius: $bdrs 0 0 $bdrs;
      }

      .timeline__event__icon {
        &:before {
          content: "";
          width: 2px;
          height: 100%;
          background: $color2;
          position: absolute;
          top: 0%;
          left: 50%;
          right: auto;
          z-index: -1;
          transform: translateX(-50%);
          animation: fillTop 2s forwards 4s ease-in-out;
        }
        &:after {
          content: "";
          width: 100%;
          height: 2px;
          background: $color2;
          position: absolute;
          right: 0;
          z-index: -1;
          top: 50%;
          left: auto;
          transform: translateY(-50%);
          animation: fillLeft 2s forwards 4s ease-in-out;
        }
      }
    }

    &__title {
      font-size: 1.2rem;
      line-height: 1.4;
      text-transform: uppercase;

      font-weight: 600;
      color: $color1;
      letter-spacing: 1.5px;
    }
    &__content {
      padding: $spacing;
      box-shadow: 0 30px 60px -12px rgba(50, 50, 93, 0.25),
        0 18px 36px -18px rgba(0, 0, 0, 0.3),
        0 -12px 36px -8px rgba(0, 0, 0, 0.025);
      background: #fff;
      width: $content-width;
      border-radius: 0 $bdrs $bdrs 0;
    }
    &__date {
      color: $color2;
      font-size: 1.5rem;
      font-weight: 600;
      background: $color1;
      display: flex;
      align-items: center;
      justify-content: center;
      white-space: nowrap;
      padding: 0 $spacing;
      border-radius: $bdrs 0 0 $bdrs;
    }
    &__icon {
      display: flex;
      align-items: center;
      justify-content: center;
      color: $color1;
      padding: $spacing;
      align-self: center;
      margin: 0 $spacing;
      background: $color2;
      border-radius: $bdrs-icon;
      width: $circle-size;
      box-shadow: 0 30px 60px -12px rgba(50, 50, 93, 0.25),
        0 18px 36px -18px rgba(0, 0, 0, 0.3),
        0 -12px 36px -8px rgba(0, 0, 0, 0.025);
      padding: 40px;
      height: $circle-size;
      position: relative;

      i {
        font-size: $icon-size;
      }

      &:before {
        content: "";
        width: 2px;
        height: 100%;
        background: $color2;
        position: absolute;
        top: 0%;
        z-index: -1;
        left: 50%;
        transform: translateX(-50%);
        animation: fillTop 2s forwards 4s ease-in-out;
      }
      &:after {
        content: "";
        width: 100%;
        height: 2px;
        background: $color2;
        position: absolute;
        left: 0%;
        z-index: -1;
        top: 50%;
        transform: translateY(-50%);
        animation: fillLeftOdd 2s forwards 4s ease-in-out;
      }
    }
    &__description {
      flex-basis: 60%;
    }

    &--type2 {
      &:after {
        background: $color4;
      }
      .timeline__event__date {
        color: $color3;
        background: $color4;
      }

      &:nth-child(2n + 1) {
        .timeline__event__icon {
          &:before,
          &:after {
            background: $color3;
          }
        }
      }

      .timeline__event__icon {
        background: $color3;
        color: $color4;
        &:before,
        &:after {
          background: $color3;
        }
      }
      .timeline__event__title {
        color: $color4;
      }
      .timeline__event__title {
      }
    }

    &--type3 {
      &:after {
        background: $color5;
      }
      .timeline__event__date {
        color: $color6;
        background-color: $color5;
      }

      &:nth-child(2n + 1) {
        .timeline__event__icon {
          &:before,
          &:after {
            background: $color6;
          }
        }
      }

      .timeline__event__icon {
        background: $color6;
        color: $color5;
        &:before,
        &:after {
          background: $color6;
        }
      }
      .timeline__event__title {
        color: $color5;
      }
      .timeline__event__title {
      }
    }
    &:last-child {
      .timeline__event__icon {
        &:before {
          content: none;
        }
      }
    }
  }
}

@media (max-width: 786px) {
  .timeline__event {
    flex-direction: column;
    align-self: center;
    width: 90vw;
    &__content {
      width: 100%;
    }

    &__icon {
      border-radius: $bdrs $bdrs 0 0;
      width: 100%;
      margin: 0;
      box-shadow: none;

      &:before,
      &:after {
        display: none;
      }
    }
    &__date {
      border-radius: 0;
      padding: $spacing;
    }

    &:nth-child(2n + 1) {
      flex-direction: column;
      align-self: center;

      .timeline__event__date {
        border-radius: 0;
        padding: $spacing;
      }

      .timeline__event__icon {
        border-radius: $bdrs $bdrs 0 0;
        margin: 0;
      }
    }
  }
}

@keyframes fillLeft {
  100% {
    right: 100%;
  }
}

@keyframes fillTop {
  100% {
    top: 100%;
  }
}

@keyframes fillLeftOdd {
  100% {
    left: 100%;
  }
}
</style>
