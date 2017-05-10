import ajah from 'ajah';

export default function main() {
  if (location.protocol.indexOf('https') >= 0) {
    ajah.itShouldOpen(function(method, url, isAsync) {
      return url.test(/^https\:\/\//);
    });
  }
}
