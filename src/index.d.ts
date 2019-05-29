/**
 * A polite request to respectfully shut ones face for an optional amount of
 * time or until a request for conversation is made.
 *
 * @param {Number} mins The number of minuets that silence is being
 * requested for.
 * @return {void} All future requests until after the specified time are
 * likely to disappear into the void.
 */
declare function shhums(mins?: Number): void;

/**
 * A polite request to for conversation at the nearest convenience or after a
 * specified amount of time
 *
 * @param {Number} mins The number of minuets that a conversation is request
 * to begin.
 * @return {Promise<Conversation>} Returns a Promise of a Conversation
 */
declare function talkies(mins?: Number): Promise<Conversation>;

/**
 * When apart, it creates a Promise for a future kiss as though to teleport
 * two people to the same location only for so long as a simple kiss.
 *
 * @return {Promise<Kiss>} Returns a Promise of a Kiss
 */
declare function trolleport(): Promise<Kiss>;

/**
 * A faster way to say a longer thing.
 */
declare enum Acronyms {
  /**
   * Pronounced 'swucked'
   */
  SWUCD = 'sleep well u cute dork'
}

declare type Kiss = any;

declare type Conversation = string;
