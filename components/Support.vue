<template>
  <section class="support">
    <div class="support__sideblock"></div>
    <form class="support__container">
      <h3 class="support__title">
        Поддержать <span class="support__span">ФАР</span>
      </h3>
      <Icon name="moronsmile" class="support__smile"></Icon>
      <div class="support__tumb-container">
        <label class="support__tumbler">
          <span class="support__label-text">Регулярно</span>
          <input
            type="checkbox"
            name="periodCheckbox"
            class="support__checkbox"
          />
          <span class="support__slider"></span>
          <span class="support__label-text">Однократно</span>
        </label>
      </div>
      <ul class="support__pay-options">
        <li class="support__pay-option">
          <label class="support__radio-label">
            <input
              type="radio"
              name="payment"
              class="support__radio"
              value="card"
            />
            <span class="support__pay-option-btn">Карта</span>
          </label>
        </li>
        <li class="support__pay-option">
          <label class="support__radio-label">
            <input
              type="radio"
              name="payment"
              class="support__radio"
              value="umoney"
            />
            <span class="support__pay-option-btn">ЮMoney</span>
          </label>
        </li>
        <li class="support__pay-option">
          <label class="support__radio-label">
            <input
              type="radio"
              name="payment"
              class="support__radio"
              value="terminal"
            />
            <span class="support__pay-option-btn">Терминал</span>
          </label>
        </li>
      </ul>
      <ul class="support__money-options">
        <li class="support__money-option">
          <label class="support__radio-label">
            <input
              type="radio"
              name="money"
              class="support__radio"
              value="1000"
            />
            <span class="support__money-option-btn"
              >1000<span class="support__ruble">&#8381;</span></span
            >
          </label>
        </li>
        <li class="support__money-option">
          <label class="support__radio-label">
            <input
              type="radio"
              name="money"
              class="support__radio"
              value="500"
            />
            <span class="support__money-option-btn"
              >500<span class="support__ruble">&#8381;</span></span
            >
          </label>
        </li>
        <li class="support__money-option">
          <label class="support__radio-label">
            <input
              type="radio"
              name="money"
              class="support__radio"
              value="200"
            />
            <span class="support__money-option-btn"
              >200<span class="support__ruble">&#8381;</span></span
            >
          </label>
        </li>
        <li class="support__sum-option">
          <input
            class="support__sum"
            type="text"
            pattern="\d+"
            placeholder="Другая сумма"
          />
          <label class="support__agreement">
            <input type="checkbox" class="support__checkbox" />
            <span class="support__agreement-check"></span>
            <span class="support__agreement-text"
              >Согласен<a class="support__agreement-link">с офертой</a></span
            >
          </label>
        </li>
      </ul>
    </form>
  </section>
</template>

<script>
import Icon from '~/components/Icon'
export default {
  name: 'Support',
  components: {
    Icon,
  },
}
</script>

<style scoped>
.support {
  width: 100%;
  height: auto;
  background: #cbcbcb;
  display: flex;
  padding: 20px 16px 16px;
}

.support__sideblock {
  display: none;
}

.support__container {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
}

.support__title {
  margin: 0;
  padding: 0;
  font-family: 'Vollkorn', sans-serif;
  font-weight: 900;
  font-size: 41px;
  line-height: 1;
  text-align: left;
  color: transparent;
  -webkit-text-stroke: 1px #000;
  width: 54%;
  word-wrap: break-word;
  align-self: flex-start;
}

.support__smile {
  position: absolute;
  top: 0;
  right: 0;
  width: 140px;
  height: auto;
}

.support__span {
  color: #000;
  font-size: 42px;
}

.support__tumb-container {
  width: 237px;
  margin: 40px 0 20px;
}

.support__tumbler {
  position: relative;
  display: flex;
  align-items: center;
  width: 58px;
  height: 35px;
}

.support__slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 83px;
  right: -84px;
  bottom: 0;
  background-color: transparent;
  border: 2px solid #000;
  -webkit-transition: 0.4s;
  transition: 0.4s;
  border-radius: 31px;
}

.support__slider::before {
  position: absolute;
  content: '';
  height: 31px;
  width: 31px;
  left: 0;
  bottom: 0;
  background-color: #b23438;
  border-radius: 50%;
}

.support__checkbox {
  display: none;
}

.support__checkbox:checked + .support__slider {
  background-color: transparent;
}

.support__checkbox:checked + .support__slider::before {
  -webkit-transform: translateX(24px);
  -ms-transform: translateX(24px);
  transform: translateX(24px);
}

.support__label-text {
  margin: 0;
  font-weight: 400;
  font-size: 13px;
  line-height: 1.4;
  color: #b23438;
  border-bottom: 1px solid #b23438;
}

.support__label-text:last-of-type {
  margin: 0 0 0 102px;
}

.support__pay-options {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
}

.support__pay-option {
  margin: 0 6px 0 0;
}

.support__pay-option:last-of-type {
  margin: 0;
}

.support__radio-label {
  position: relative;
  display: flex;
  align-items: center;
}

.support__radio {
  display: none;
}

.support__pay-option-btn {
  width: 90px;
  height: 33px;
  box-shadow: none;
  border: none;
  background: #fff;
  border-radius: 17px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.support__pay-option-btn:hover {
  background-color: rgba(178, 52, 56, 0.2);
  cursor: pointer;
}

.support__radio:checked + .support__pay-option-btn {
  background: #b23438;
  color: #fff;
}

.support__money-options {
  list-style: none;
  padding: 0;
  margin: 11px 0 13px;
  display: flex;
  flex-wrap: wrap;
}

.support__money-option {
  margin: 0;
}

.support__money-option:first-of-type {
  margin: 0 17px 10px 0;
}

.support__money-option-btn {
  width: 133px;
  height: 83px;
  background: #fff;
  color: rgba(0, 0, 0, 0.2);
  font-family: 'Tomorrow Wind', sans-serif;
  font-size: 108px;
  line-height: 0.8;
  border-radius: 20px;
}

.support__money-option-btn:hover {
  border: 1px solid #000;
  cursor: pointer;
}

.support__radio:checked + .support__money-option-btn {
  background-color: transparent;
  color: #000;
  border: 2px solid #000;
}

.support__ruble {
  color: #fff;
  font-family: 'Druk Cyr', sans-serif;
  font-size: 84px;
  text-shadow: -1px 0 #cbcbcb, 0 1px #cbcbcb, 1px 0 #cbcbcb, 0 -1px #cbcbcb;
  mix-blend-mode: multiply;
}

.support__radio:checked ~ span > span {
  text-shadow: -1px 0 #000, 0 1px #000, 1px 0 #000, 0 -1px #000;
}

.support__sum-option {
  display: flex;
  flex-direction: column;
  width: 44%;
  margin: 0 0 0 10px;
  align-items: flex-start;
}

.support__sum {
  background: transparent;
  border: none;
  border-bottom: 1px solid #727272;
  margin: 0 0 17px 0;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 15px;
  line-height: 1.3;
  padding: 20px 0 6px;
}

.support__sum:focus {
  outline: none;
  border-bottom: 1px solid #000;
}

.support__agreement {
  position: relative;
  display: flex;
  align-items: center;
  width: 15px;
  height: 15px;
}

.support__agreement-check {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: transparent;
  border: 1px solid #727272;
  -webkit-transition: 0.4s;
  transition: 0.4s;
  border-radius: 4px;
}

.support__checkbox:checked + .support__agreement-check::before {
  content: '✓';
}

.support__agreement-text {
  font-family: 'Roboto', sans-serif;
  font-size: 11px;
  line-height: 1.8;
  color: #727272;
  display: flex;
  justify-content: space-between;
  min-width: 104px;
  margin: 0 0 0 23px;
}

.support__agreement-link {
  text-decoration: none;
}

@media screen and (min-width: 1280px) {
  .support {
    width: 56%;
    padding: 0;
  }

  .support .container:nth-child(7) {
    order: 6;
  }

  .support__sideblock {
    display: flex;
    flex-direction: column;
    width: 100px;
    background: #d5d5d5;
  }
}
</style>
