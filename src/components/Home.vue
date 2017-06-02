<template>
  <div class="section main">
    <div class="container">
      <div class="columns">
        <div class="column is-4">
          <div class="panel">
            <div class="panel-block section">
              <p class="has-text-centered">
                <i class="fa fa-camera-retro icon-block"></i>
              </p>
              <br>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.</p>
              <br>
              <p class="has-text-centered">
                <a @click="open('one')" class="button is-info is-outlined">One</a>
              </p>
            </div>
          </div>
        </div>
        <div class="column is-4">
          <div class="panel">
            <div class="panel-block section">
              <p class="has-text-centered">
                <i class="fa fa-bar-chart icon-block"></i>
              </p>
              <br>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.</p>
              <br>
              <p class="has-text-centered">
                <a @click="open('two')" class="button is-info is-outlined">Two</a>
              </p>
            </div>
          </div>
        </div>
        <div class="column is-4">
          <div class="panel">
            <div class="panel-block section">
              <p class="has-text-centered">
                <i class="fa fa-cloud icon-block"></i>
              </p>
              <br>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.</p>
              <br>
              <p class="has-text-centered">
                <a @click="open('three')" class="button is-info is-outlined">Three</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <card-modal :title="'Teste de Titulo de Modal ' + form.origin" :visible="visible" okText="Enviar" cancelText="Desistir" @cancel="onClose()" @close="onClose()">
      <div class="block">
        <div class="control">
          <label class="label">Nome *</label>
          <p class="control has-icon has-icon-right">
            <input class="input" v-model="form.nome" :class="{'is-danger': $v.form.nome.$error}" @input="$v.form.nome.$touch()" type="text" placeholder="Digite seu nome">
            <span v-if="$v.form.nome.$error" class="icon is-small">
              <i class="fa fa-warning"></i>
            </span>
            <span v-for="validate in ['required', 'minLength']" v-if="!$v.form.nome[validate]" class="help is-danger">{{messages.form.nome[validate]}}</span>
          </p>
        </div>
        <div class="control">
          <label class="label">Email *</label>
          <p class="control has-icon has-icon-right">
            <input class="input" v-model="form.email" :class="{'is-danger': $v.form.email.$error}" @input="$v.form.email.$touch()" type="text" placeholder="Digite um email válido">
            <span v-if="$v.form.email.$error" class="icon is-small">
              <i class="fa fa-warning"></i>
            </span>
            <span v-for="validate in ['required', 'minLength']" v-if="!$v.form.email[validate]" class="help is-danger">{{messages.form.email[validate]}}</span>
          </p>
        </div>
        <div class="control">
          <label class="label">Telefone *</label>
          <p class="control has-icon has-icon-right">
            <cleave class="input" type="tel" v-model="form.telefone" :class="{'is-danger': $v.form.telefone.$error}" @input="$v.form.telefone.$touch()" placeholder="Digite o seu telefone (de preferência com whatsapp)" :options="{ phone: true, phoneRegionCode: 'br' }"></cleave>
            <span v-if="$v.form.telefone.$error" class="icon is-small">
              <i class="fa fa-warning"></i>
            </span>
            <span v-for="validate in ['required', 'minLength']" v-if="!$v.form.telefone[validate]" class="help is-danger">{{messages.form.telefone[validate]}}</span>
          </p>
        </div>
        <div class="control">
          <label class="label">Empresa</label>
          <p class="control">
            <input class="input" type="text" placeholder="Digite o nome da empresa em que trabalha">
          </p>
        </div>
      </div>
    </card-modal>
  </div>
</template>

<script>
import { CardModal } from 'vue-bulma-modal'
import Cleave from 'vue-cleave'
import 'cleave.js/dist/addons/cleave-phone.br'
import { required, minLength } from 'vuelidate/lib/validators'

export default {
  components: {
    CardModal,
    Cleave
  },
  data () {
    return {
      visible: false,
      form: {
        nome: '',
        email: '',
        telefone: '',
        empresa: ''
      }
    }
  },
  validations: {
    form: {
      nome: {
        required,
        minLength: minLength(5)
      },
      email: {
        required,
        minLength: minLength(5)
      },
      telefone: {
        required,
        minLength: minLength(8)
      }
    }
  },
  methods: {
    onClose () {
      this.visible = false
    },
    open (origin) {
      this.form.origin = origin
      this.visible = true
    }
  },
  computed: {
    messages () {
      return {
        form: {
          nome: {
            required: 'Nome é obrigatório',
            minLength: 'Nome não pode ser menor que 5 caracteres'
          },
          email: {
            required: 'Email é obrigatório',
            minLength: 'Email não pode ser menor que 5 caracteres'
          },
          telefone: {
            required: 'Telefone é obrigatório',
            minLength: 'Telefone não pode ser menor que 8 caracteres'
          }
        }
      }
    }
  }
}
</script>

<style>
.panel-block.section p {
  font-size: 17px;
  line-height: 1.4;
  color: #95A5A6;
}

.section.main {
  background-color: #F0F0F0;
}

.icon-block {
  font-size: 5em;
}
</style>
