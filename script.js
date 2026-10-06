'use strict';
const topics = {
  foundations: {name: 'Security foundations', tip: 'Revisit confidentiality, integrity and availability in the lesson above.', link: '#lesson'},
  access: {name: 'Accounts and access control', tip: 'Review unique passwords, password managers, multifactor authentication and least privilege.'},
  phishing: {name: 'Phishing awareness', tip: 'Practise recognising urgency and verifying requests through a trusted, independent channel.'},
  networks: {name: 'Network and web security', tip: 'Review what HTTPS protects and why an encrypted connection does not prove a website is trustworthy.'},
  resilience: {name: 'Updates and recovery', tip: 'Review security patches and backups that can be restored after an incident.'},
  ethics: {name: 'Authorisation and scope', tip: 'Review explicit permission and the boundaries of authorised security testing.'}
};
const questions = [
  {topic:'foundations', text:'A school portal goes offline. Which security goal is most directly affected?', options:['Confidentiality','Integrity','Availability'], correct:2, explanation:'Availability means systems and information can be accessed when needed. An outage prevents access.'},
  {topic:'foundations', text:'Someone changes a student’s grade without permission. Which goal is most directly affected?', options:['Availability','Integrity','Confidentiality'], correct:1, explanation:'Integrity concerns accurate information and authorised changes. An unauthorised grade change undermines it.'},
  {topic:'access', text:'Which approach best protects an important account?', options:['Reuse one long password everywhere','Use a unique password stored in a password manager and enable multifactor authentication','Share the password with a friend as a backup'], correct:1, explanation:'Unique passwords limit the impact of a breach elsewhere. Multifactor authentication adds another verification step; phishing-resistant methods are preferable when available.'},
  {topic:'access', text:'A colleague only needs to read a report. What access should they receive?', options:['Administrator access','Access to every company folder','Read access to the report they need'], correct:2, explanation:'Least privilege means granting only the access needed for the task, rather than broad or administrative permissions.'},
  {topic:'phishing', text:'An unexpected email demands an urgent login through a link. What is the safest next step?', options:['Open the service through its known app or address and independently verify the request','Click the link because it includes the company logo','Reply with your password'], correct:0, explanation:'Urgency and branding can be used to manipulate you. Verify through a trusted route, not contact details supplied in the suspicious message.'},
  {topic:'networks', text:'A website uses HTTPS. What does this tell you?', options:['The website can never be malicious','The connection is encrypted, but the site may still be untrustworthy','Every download from the site is safe'], correct:1, explanation:'HTTPS protects data in transit and authenticates the connection to the domain. Malicious websites can also use HTTPS.'},
  {topic:'resilience', text:'Which combination helps reduce known vulnerabilities and recover lost data?', options:['Disable updates and keep one copy of files','Install security updates and maintain separate, tested backups','Rely only on a strong Wi-Fi password'], correct:1, explanation:'Updates address known vulnerabilities. Separate backups and restore testing help you recover; some backups should be protected from changes or deletion during an incident.'},
  {topic:'ethics', text:'You want to test a company’s website for vulnerabilities. What must come first?', options:['Run a scan and ask later','Assume public websites allow testing','Obtain explicit authorisation and agree the testing scope'], correct:2, explanation:'Public access is not permission to test. Obtain authorisation and follow the agreed systems, methods and limits.'}
];
const form = document.getElementById('quiz');
const container = document.getElementById('quiz-questions');
const results = document.getElementById('quiz-results');
document.getElementById('year').textContent = new Date().getFullYear();
questions.forEach((question, index) => {
  const fieldset = document.createElement('fieldset');
  const legend = document.createElement('legend');
  legend.textContent = `${index + 1}. ${question.text}`;
  fieldset.append(legend);
  question.options.forEach((option, value) => {
    const label = document.createElement('label');
    const input = document.createElement('input');
    input.type = 'radio'; input.name = `q${index}`; input.value = String(value); input.required = true;
    label.append(input, document.createTextNode(option)); fieldset.append(label);
  });
  container.append(fieldset);
});
function assess(answers) {
  const stats = Object.fromEntries(Object.keys(topics).map(key => [key, {correct:0, total:0}]));
  let score = 0;
  const review = questions.map((question, index) => {
    const correct = Number(answers[index]) === question.correct;
    stats[question.topic].total++;
    if (correct) {score++; stats[question.topic].correct++;}
    return {question, correct, selected: Number(answers[index])};
  });
  return {score, stats, review};
}
function addText(parent, tag, content, className) {
  const element = document.createElement(tag); element.textContent = content;
  if (className) element.className = className;
  parent.append(element); return element;
}
form.addEventListener('submit', event => {
  event.preventDefault();
  if (!form.reportValidity()) return;
  const data = new FormData(form);
  const assessment = assess(questions.map((_, i) => data.get(`q${i}`)));
  results.replaceChildren();
  addText(results, 'h3', 'Your learning snapshot');
  addText(results, 'p', `${assessment.score} / ${questions.length} correct`, 'result-score');
  addText(results, 'p', assessment.score === questions.length ? 'You answered this introductory check correctly. Keep practising and explore the roadmap.' : 'Use the topics below to guide your revision, then try the quiz again.');
  addText(results, 'h4', 'Topic feedback');
  const list = document.createElement('ul'); list.className = 'topic-results'; results.append(list);
  Object.entries(assessment.stats).forEach(([key, stat]) => {
    const item = document.createElement('li'); list.append(item);
    const topic = topics[key];
    addText(item, 'strong', `${topic.name}: ${stat.correct}/${stat.total} — ${stat.correct === stat.total ? 'Correct on this check' : 'Revisit this topic'}`);
    addText(item, 'p', stat.correct === stat.total ? 'Continue building on this foundation; this short check does not measure mastery.' : topic.tip);
    if (topic.link && stat.correct < stat.total) {
      const link = document.createElement('a'); link.href = topic.link; link.textContent = 'Revisit the foundations lesson ↑'; item.append(link);
    }
  });
  addText(results, 'h4', 'Answer review');
  assessment.review.forEach(({question, correct, selected}, index) => {
    const item = document.createElement('div'); item.className = 'review-item'; results.append(item);
    addText(item, 'span', `Question ${index + 1} · ${correct ? 'Correct' : 'Needs revision'} · ${topics[question.topic].name}`, `review-status${correct ? '' : ' missed'}`);
    addText(item, 'p', question.text);
    if (!correct) addText(item, 'p', `Your answer: ${question.options[selected]}`);
    addText(item, 'p', `Correct answer: ${question.options[question.correct]}`);
    addText(item, 'p', question.explanation);
  });
  results.hidden = false; results.focus();
});
form.addEventListener('reset', () => {
  results.hidden = true; results.replaceChildren();
  form.querySelector('input').focus();
});
