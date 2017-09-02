function run(argument) {
  if (argument == undefined) {
    LaunchBar.alert('No argument was passed to the action');
  } else {
    // Presenting the laziest URL matcher eva
    var urls = argument.match(/https?:\S+/gi);
    if (urls.length == 0) {
      LaunchBar.alert('No URLs found');
    }
    urls.forEach(function(el) {
      LaunchBar.openURL(el);
    })
  }
}
