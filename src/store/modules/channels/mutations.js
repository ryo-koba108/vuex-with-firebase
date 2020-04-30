import Vue from 'vue';

export const mutations = {
  setChannels(state, { channels }) {
    state.channels = channels;
  },

  setLoading(state, {loadingType, isLoading}) {
    state.loading[loadingType] = isLoading;
  },

  setChannelMessages(state, { channelId, messages }) {
    const index = state.channels.findIndex(
      channel => channel.id === channelId
    );
    if (index === -1) {
      throw new Error('存在しないID');
    }

    if (!state.channels[index].messages) {
      Vue.set(state.channels[index], 'messages', messages)
    } else {
      state.channels[index].messages = [...messages];
    }
  },

  addMessage(state, { channelId, message }) {
    const index = state.channels.findIndex(
      channel => channel.id === channelId
    );
    if (index === -1) {
      throw new Error('存在しないID');
    }

    state.channels[index].messages = [
      ...state.channels[index].messages,
      message
    ];
  }
};