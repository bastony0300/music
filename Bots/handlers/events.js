const { readdirSync } = require('fs');
const ascii = require('ascii-table');

let table = new ascii('Events');
table.setHeading('Event Name', 'Loaded Status');

module.exports = (client2) => {
  const events = readdirSync(`${process.cwd()}/Bots/events/`).filter((file) => file.endsWith('.js'));
  for (const file of events) {
    try {
      let pull = require(`${process.cwd()}/Bots/events/${file}`);
      if (pull.event && typeof pull.event !== 'string') {
        table.addRow(file, '❌');
        continue;
      }
      pull.event = pull.event || file.replace('.js', '');
      if (typeof pull.run !== 'function') {
        table.addRow(file, '❌');
        continue;
      }
      client2.on(pull.event, pull.run.bind(null, client2));
      table.addRow(file, '✅');
    } catch (error) {
      console.error(`Error loading event '${file}':`, error);
      table.addRow(file, '❌');
    }
  }
};
