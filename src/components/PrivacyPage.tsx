"use client"

import { motion } from "framer-motion";

export function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 transition-colors py-20">
      <div className="container mx-auto px-6 max-w-4xl">
        
<h1 className="text-4xl md:text-5xl text-zinc-900 dark:text-zinc-100 mb-8">Datenschutzerklärung</h1>

<div className="space-y-8 text-zinc-700 dark:text-zinc-300">
  <section>
    <h2 className="text-2xl text-zinc-900 dark:text-zinc-100 mb-4">1) Einleitung und Kontaktdaten des Verantwortlichen</h2>
    
    <p className="mb-3">
      1.1 Wir freuen uns, dass Sie unsere Website besuchen und bedanken uns für Ihr Interesse. Im Folgenden informieren wir Sie über den Umgang mit Ihren personenbezogenen Daten bei der Nutzung unserer Website. Personenbezogene Daten sind hierbei alle Daten, mit denen Sie persönlich identifiziert werden können.
    </p>
    
    <p className="mb-3">
      1.2 Verantwortlicher für die Datenverarbeitung auf dieser Website im Sinne der Datenschutz-Grundverordnung (DSGVO) ist Johanns Handels und Gastro GmbH, Gewerbestrasse 4 Top 11, 7111 Parndorf, Österreich, Tel.: +43 2166 20451, E-Mail: office@johanns.cc. Der für die Verarbeitung von personenbezogenen Daten Verantwortliche ist diejenige natürliche oder juristische Person, die allein oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten entscheidet.
    </p>
  </section>

  <section>
    <h2 className="text-2xl text-zinc-900 dark:text-zinc-100 mb-4">2) Datenerfassung beim Besuch unserer Website</h2>
    
    <p className="mb-3">
      2.1 Bei der bloß informatorischen Nutzung unserer Website, also wenn Sie sich nicht registrieren oder uns anderweitig Informationen übermitteln, erheben wir nur solche Daten, die Ihr Browser an den Seitenserver übermittelt (sog. „Server-Logfiles"). Wenn Sie unsere Website aufrufen, erheben wir die folgenden Daten, die für uns technisch erforderlich sind, um Ihnen die Website anzuzeigen:
    </p>
    
    <ul className="list-disc list-inside space-y-1 mb-3 ml-4">
      <li>Unsere besuchte Website</li>
      <li>Datum und Uhrzeit zum Zeitpunkt des Zugriffes</li>
      <li>Menge der gesendeten Daten in Byte</li>
      <li>Quelle/Verweis, von welchem Sie auf die Seite gelangten</li>
      <li>Verwendeter Browser</li>
      <li>Verwendetes Betriebssystem</li>
      <li>Verwendete IP-Adresse (ggf.: in anonymisierter Form)</li>
    </ul>
    
    <p className="mb-3">
      Die Verarbeitung erfolgt gemäß Art. 6 Abs. 1 lit. f DSGVO auf Basis unseres berechtigten Interesses an der Verbesserung der Stabilität und Funktionalität unserer Website. Eine Weitergabe oder anderweitige Verwendung der Daten findet nicht statt. Wir behalten uns allerdings vor, die Server-Logfiles nachträglich zu überprüfen, sollten konkrete Anhaltspunkte auf eine rechtswidrige Nutzung hinweisen.
    </p>
    
    <p className="mb-3">
      2.2 Diese Website nutzt aus Sicherheitsgründen und zum Schutz der Übertragung personenbezogener Daten und anderer vertraulicher Inhalte (z.B. Bestellungen oder Anfragen an den Verantwortlichen) eine SSL-bzw. TLS-Verschlüsselung. Sie können eine verschlüsselte Verbindung an der Zeichenfolge „https://" und dem Schloss-Symbol in Ihrer Browserzeile erkennen.
    </p>
  </section>

  <section>
    <h2 className="text-2xl text-zinc-900 dark:text-zinc-100 mb-4">3) Hosting & Content-Delivery-Network</h2>
    
    <h3 className="text-xl text-zinc-900 dark:text-zinc-100 mb-3 mt-6">3.1 Wix</h3>
    <p className="mb-3">
      Für das Hosting unserer Website und die Darstellung der Seiteninhalte nutzen wir das System des folgenden Anbieters: Wix HQ, 6350671, Nemal Tel Aviv St 40, Tel Aviv-Yafo, Israel
    </p>
    <p className="mb-3">
      Daten werden zudem übertragen an: Wix Inc., 500 Terry A. Francois Boulevard, San Francisco, California 94158, USA
    </p>
    <p className="mb-3">
      Sämtliche auf unserer Website erhobenen Daten werden auf den Servern des Anbieters verarbeitet.
    </p>
    <p className="mb-3">
      Wir haben mit dem Anbieter einen Auftragsverarbeitungsvertrag geschlossen, der den Schutz der Daten unserer Seitenbesucher sicherstellt und eine unberechtigte Weitergabe an Dritte untersagt.
    </p>
    <p className="mb-3">
      Bei einer Datenübermittlung an den Anbieterstandort ist ein angemessenes Datenschutzniveau durch einen Angemessenheitsbeschluss der Europäischen Kommission gewährleistet.
    </p>
    <p className="mb-3">
      Für Datenübermittlungen in die USA hat sich der Anbieter dem EU-US-Datenschutzrahmen (EU-US Data Privacy Framework) angeschlossen, das auf Basis eines Angemessenheitsbeschlusses der Europäischen Kommission die Einhaltung des europäischen Datenschutzniveaus sicherstellt.
    </p>

    <h3 className="text-xl text-zinc-900 dark:text-zinc-100 mb-3 mt-6">3.2 Google Cloud CDN</h3>
    <p className="mb-3">
      Wir nutzen ein Content Delivery Network des folgenden Anbieters: Google Ireland Limited, Gordon House, 4 Barrow St, Dublin, D04 E5W5, Irland
    </p>
    <p className="mb-3">
      Dieser Dienst ermöglicht uns, große Mediendateien wie Grafiken, Seiteninhalte oder Skripte über ein Netz regional verteilter Server schneller auszuliefern. Die Verarbeitung erfolgt zur Wahrung unseres berechtigten Interesses an der Verbesserung der Stabilität und Funktionalität unserer Website gem. Art. 6 Abs. 1 lit. f DSGVO.
    </p>
    <p className="mb-3">
      Daten können zudem übertragen werden an: Google LLC, USA
    </p>
    <p className="mb-3">
      Wir haben mit dem Anbieter einen Auftragsverarbeitungsvertrag geschlossen, der den Schutz der Daten unserer Seitenbesucher sicherstellt und eine unberechtigte Weitergabe an Dritte untersagt.
    </p>
    <p>
      Für Datenübermittlungen in die USA hat sich der Anbieter dem EU-US-Datenschutzrahmen (EU-US Data Privacy Framework) angeschlossen, das auf Basis eines Angemessenheitsbeschlusses der Europäischen Kommission die Einhaltung des europäischen Datenschutzniveaus sicherstellt.
    </p>
  </section>

  <section>
    <h2 className="text-2xl text-zinc-900 dark:text-zinc-100 mb-4">4) Cookies</h2>
    <p className="mb-3">
      Um den Besuch unserer Website attraktiv zu gestalten und die Nutzung bestimmter Funktionen zu ermöglichen, verwenden wir Cookies, also kleine Textdateien, die auf Ihrem Endgerät abgelegt werden. Teilweise werden diese Cookies nach Schließen des Browsers automatisch wieder gelöscht (sog. „Session-Cookies"), teilweise verbleiben diese Cookies länger auf Ihrem Endgerät und ermöglichen das Speichern von Seiteneinstellungen (sog. „persistente Cookies"). Im letzteren Fall können Sie die Speicherdauer der Übersicht zu den Cookie-Einstellungen Ihres Webbrowsers entnehmen.
    </p>
    <p className="mb-3">
      Sofern durch einzelne von uns eingesetzte Cookies auch personenbezogene Daten verarbeitet werden, erfolgt die Verarbeitung gemäß Art. 6 Abs. 1 lit. b DSGVO entweder zur Durchführung des Vertrages, gemäß Art. 6 Abs. 1 lit. a DSGVO im Falle einer erteilten Einwilligung oder gemäß Art. 6 Abs. 1 lit. f DSGVO zur Wahrung unserer berechtigten Interessen an der bestmöglichen Funktionalität der Website sowie einer kundenfreundlichen und effektiven Ausgestaltung des Seitenbesuchs.
    </p>
    <p className="mb-3">
      Sie können Ihren Browser so einstellen, dass Sie über das Setzen von Cookies informiert werden und einzeln über deren Annahme entscheiden oder die Annahme von Cookies für bestimmte Fälle oder generell ausschließen können.
    </p>
    <p>
      Bitte beachten Sie, dass bei Nichtannahme von Cookies die Funktionalität unserer Website eingeschränkt sein kann.
    </p>
  </section>

  <section>
    <h2 className="text-2xl text-zinc-900 dark:text-zinc-100 mb-4">5) Kontaktaufnahme</h2>
    
    <h3 className="text-xl text-zinc-900 dark:text-zinc-100 mb-3 mt-6">5.1 Wix Bookings/Wix Events</h3>
    <p className="mb-3">
      Für die Bereitstellung einer Online-Terminbuchungsfunktion nutzen wir die Dienste des folgenden Anbieters: Wix HQ, 6350671, Nemal Tel Aviv St 40, Tel Aviv-Yafo, Israel
    </p>
    <p className="mb-3">
      Daten werden zudem übertragen an: Wix Inc., 500 Terry A. Francois Boulevard, San Francisco, California 94158, USA
    </p>
    <p className="mb-3">
      Zum Zwecke der Terminvergabe werden gemäß Art. 6 Abs. 1 lit. b DSGVO Vor- und Zuname sowie Mailadresse (und ggf. die Telefonnummer, sofern ein telefonischer Termin gewünscht ist) erhoben und gemäß Art. 6 Abs. 1 lit. f DSGVO auf Basis unseres berechtigten Interesses an einem effektiven Kundenmanagement und einer effizienten Terminverwaltung an den Anbieter übermittelt und dort für die Terminorganisation gespeichert.
    </p>
    <p className="mb-3">
      Nach Abhaltung des Termins bzw. nach Ablauf des vereinbarten Terminzeitraums werden Ihre Daten vom Anbieter gelöscht.
    </p>
    <p className="mb-3">
      Wir haben mit dem Anbieter einen Auftragsverarbeitungsvertrag geschlossen, der den Schutz der Daten unserer Seitenbesucher sicherstellt und eine unberechtigte Weitergabe an Dritte untersagt.
    </p>
    <p className="mb-3">
      Bei einer Datenübermittlung an den Anbieterstandort ist ein angemessenes Datenschutzniveau durch einen Angemessenheitsbeschluss der Europäischen Kommission gewährleistet.
    </p>
    <p>
      Für Datenübermittlungen in die USA hat sich der Anbieter dem EU-US-Datenschutzrahmen (EU-US Data Privacy Framework) angeschlossen, das auf Basis eines Angemessenheitsbeschlusses der Europäischen Kommission die Einhaltung des europäischen Datenschutzniveaus sicherstellt.
    </p>

    <h3 className="text-xl text-zinc-900 dark:text-zinc-100 mb-3 mt-6">5.2 WhatsApp-Business</h3>
    <p className="mb-3">
      Wir bieten Besuchern unserer Webseite die Möglichkeit, mit uns über den Nachrichtendienst WhatsApp der WhatsApp Ireland Limited, 4 Grand Canal Square, Grand Canal Harbour, Dublin 2, Irland, in Kontakt zu treten. Hierfür verwenden wir die sog. „Business-Version" von WhatsApp.
    </p>
    <p className="mb-3">
      Sofern Sie uns anlässlich eines konkreten Geschäfts (beispielsweise einer getätigten Bestellung) per WhatsApp kontaktieren, speichern und verwenden wir die von Ihnen bei WhatsApp genutzte Mobilfunknummer sowie – falls bereitgestellt – Ihren Vor- und Nachnamen gemäß Art. 6 Abs. 1 lit. b. DSGVO zur Bearbeitung und Beantwortung Ihres Anliegens. Auf Basis derselben Rechtsgrundlage werden wir Sie per WhatsApp gegebenenfalls um die Bereitstellung weiterer Daten (Bestellnummer, Kundennummer, Anschrift oder E-Mailadresse) bitten, um Ihre Anfrage einem bestimmten Vorgang zuordnen zu können.
    </p>
    <p className="mb-3">
      Nutzen Sie unseren WhatsApp-Kontakt für allgemeine Anfragen (etwa zum Leistungsspektrum, zu Verfügbarkeiten oder zu unserem Internetauftritt) speichern und verwenden wir die von Ihnen bei WhatsApp genutzte Mobilfunknummer sowie – falls bereitgestellt – Ihren Vor- und Nachnamen gemäß Art. 6 Abs. 1 lit. f DSGVO auf Basis unseres berechtigten Interesses an der effizienten und zeitnahen Bereitstellung der gewünschten Informationen.
    </p>
    <p className="mb-3">
      Ihre Daten werden stets nur zur Beantwortung Ihres Anliegens per WhatsApp verwendet. Eine Weitergabe an Dritte findet nicht statt.
    </p>
    <p className="mb-3">
      Bitte beachten Sie, dass WhatsApp Business Zugriff auf das Adressbuch des von uns hierfür verwendeten mobilen Endgeräts erhält und im Adressbuch gespeicherte Telefonnummern automatisch an einen Server des Mutterkonzerns Meta Platforms Inc. in den USA überträgt. Für den Betrieb unseres WhatsApp-Business-Kontos verwenden wir ein mobiles Endgerät, in dessen Adressbuch ausschließlich die WhatsApp-Kontaktdaten solcher Nutzer gespeichert werden, die mit uns per WhatsApp auch in Kontakt getreten sind.
    </p>
    <p className="mb-3">
      Hierdurch wird sichergestellt, dass jede Person, deren WhatsApp- Kontaktdaten in unserem Adressbuch gespeichert sind, bereits bei erstmaliger Nutzung der App auf seinem Gerät durch Akzeptanz der WhatsApp-Nutzungsbedingungen in die Übermittlung seiner WhatsApp-Telefonnummer aus den Adressbüchern seiner Chat-Kontakte gemäß Art. 6 Abs. 1 lit. a DSGVO eingewilligt hat. Eine Übermittlung von Daten solcher Nutzer, die WhatsApp nicht verwenden und/oder uns nicht über WhatsApp kontaktiert haben, wird insofern ausgeschlossen.
    </p>
    <p className="mb-3">
      Zweck und Umfang der Datenerhebung und die weitere Verarbeitung und Nutzung der Daten durch WhatsApp sowie Ihre diesbezüglichen Rechte und Einstellungsmöglichkeiten zum Schutz Ihrer Privatsphäre entnehmen Sie bitte den Datenschutzhinweisen von WhatsApp: https://www.whatsapp.com/legal/?eea=1#privacy-policy
    </p>
    <p className="mb-3">
      Im Rahmen der oben genannten Verarbeitungen kann es zu Datenübertragungen an Server von Meta Platforms Inc. in den USA kommen.
    </p>
    <p>
      Für Datenübermittlungen in die USA hat sich der Anbieter dem EU-US-Datenschutzrahmen (EU-US Data Privacy Framework) angeschlossen, das auf Basis eines Angemessenheitsbeschlusses der Europäischen Kommission die Einhaltung des europäischen Datenschutzniveaus sicherstellt.
    </p>

    <h3 className="text-xl text-zinc-900 dark:text-zinc-100 mb-3 mt-6">5.3 Im Rahmen der Kontaktaufnahme mit uns</h3>
    <p className="mb-3">
      Im Rahmen der Kontaktaufnahme mit uns (z.B. per Kontaktformular oder E-Mail) werden personenbezogene Daten erhoben. Welche Daten im Falle der Nutzung eines Kontaktformulars erhoben werden, ist aus dem jeweiligen Kontaktformular ersichtlich. Diese Daten werden ausschließlich zum Zweck der Beantwortung Ihres Anliegens bzw. für die Kontaktaufnahme und die damit verbundene technische Administration gespeichert und verwendet.
    </p>
    <p>
      Rechtsgrundlage für die Verarbeitung dieser Daten ist unser berechtigtes Interesse an der Beantwortung Ihres Anliegens gemäß Art. 6 Abs. 1 lit. f DSGVO. Zielt Ihre Kontaktierung auf den Abschluss eines Vertrages ab, so ist zusätzliche Rechtsgrundlage für die Verarbeitung Art. 6 Abs. 1 lit. b DSGVO. Ihre Daten werden nach abschließender Bearbeitung Ihrer Anfrage gelöscht. Dies ist der Fall, wenn sich aus den Umständen entnehmen lässt, dass der betroffene Sachverhalt abschließend geklärt ist und sofern keine gesetzlichen Aufbewahrungspflichten entgegenstehen.
    </p>
  </section>

  <section>
    <h2 className="text-2xl text-zinc-900 dark:text-zinc-100 mb-4">6) Registrierung beim Portal bzw. Forum</h2>
    <p className="mb-3">
      Sie können sich auf unserer Website unter Angabe von personenbezogenen Daten registrieren. Welche personenbezogenen Daten für die Registrierung verarbeitet werden, ergibt sich aus der Eingabemaske, die für die Registrierung verwendet wird. Wir verwenden für die Registrierung das sog. Double-opt-in-Verfahren, d. h. Ihre Registrierung ist erst abgeschlossen, wenn Sie zuvor Ihre Anmeldung über eine Ihnen zu diesem Zweck zugesandte Bestätigungs-E-Mail durch Klick auf den darin enthaltenem Link bestätigt haben. Falls Ihre diesbezügliche Bestätigung nicht binnen 24 Stunden erfolgt, wird Ihre Anmeldung automatisch aus unserer Datenbank gelöscht. Die Angabe der zuvor genannten Daten ist verpflichtend. Alle weiteren Informationen können Sie freiwillig durch Nutzung unseres Portals bereitstellen.
    </p>
    <p className="mb-3">
      Wenn Sie unser Portal nutzen, speichern wir Ihre zur Vertragserfüllung erforderlichen Daten, auch evtl. Angaben zur Zahlungsweise, bis Sie Ihren Zugang endgültig löschen. Weiterhin speichern wir die von Ihnen angegebenen freiwilligen Daten für die Zeit Ihrer Nutzung des Portals, soweit Sie diese nicht zuvor löschen. Alle Angaben können Sie im geschützten Kundenbereich verwalten und ändern. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO.
    </p>
    <p>
      Darüber hinaus speichern wir alle von Ihnen veröffentlichten Inhalte (wie z.B. öffentliche Beiträge, Pinnwandeinträge, Gästebucheintragungen, etc.), um die Website zu betreiben. Wir haben ein berechtigtes Interesse an der Bereitstellung der Website mit dem vollständigen User-Generated-Content. Die Rechtsgrundlage hierfür ist Art. 6 Abs. 1 lit. f DSGVO. Wenn Sie Ihren Account löschen, bleiben Ihre öffentlichen Äußerungen, insbesondere im Forum, weiterhin für alle Leser sichtbar, Ihr Account ist jedoch nicht mehr abrufbar. Alle übrigen Daten werden in diesem Fall gelöscht.
    </p>
  </section>

  <section>
    <h2 className="text-2xl text-zinc-900 dark:text-zinc-100 mb-4">7) Nutzung von Kundendaten zur Direktwerbung</h2>
    
    <h3 className="text-xl text-zinc-900 dark:text-zinc-100 mb-3 mt-6">7.1 Anmeldung zu unserem Abonnement-/E-Mail-Newsletter</h3>
    <p className="mb-3">
      Indem Sie unser Anmeldeformular nutzen, erklären Sie sich ausdrücklich damit einverstanden, dass wir die von Ihnen freiwillig angegebenen personenbezogenen Daten, einschließlich Ihres Vor- und Nachnamens, Geburtsdatums, Ihrer E-Mail-Adresse, Ihrer Unterschrift sowie optionaler Angaben wie Telefonnummer, Adresse und Daten Ihres Kindes, die Name, Nachname, Geburtsdatum und Geschlecht umfassen können, verarbeiten. Die Erhebung dieser Daten erfolgt ausschließlich, um Ihnen Informationen zu unseren Angeboten, Aktionen, Promotions und Dienstleistungen zukommen zu lassen, die Verwaltung Ihrer Anmeldung zu ermöglichen und Ihnen eine persönliche Ansprache über unseren E-Mail-Newsletter und andere Kommunikationskanäle zu bieten. Die Verarbeitung dieser Daten erfolgt auf Grundlage Ihrer freiwilligen Einwilligung gemäß Art. 6 Abs. 1 lit. a DSGVO, die Sie durch das Absenden des Formulars erteilen, sowie – soweit Sie uns Ihre E-Mailadresse beim Kauf von Waren oder Dienstleistungen zur Verfügung gestellt haben – auf Grundlage unseres berechtigten Interesses gemäß Art. 6 Abs. 1 lit. f DSGVO, um Ihnen personalisierte Informationen zu ähnlichen Produkten und Dienstleistungen zukommen zu lassen.
    </p>
    <p className="mb-3">
      Ihre personenbezogenen Daten werden an den Dienstleister Brevo übermittelt, der die Speicherung, Verwaltung und den Versand der Newsletter übernimmt. Brevo verarbeitet und speichert Ihre Daten ausschließlich für die in diesem Zusammenhang beschriebenen Zwecke. Eine Weitergabe an Dritte erfolgt nur, wenn dies zur Vertragserfüllung, zur rechtlichen Absicherung oder aufgrund gesetzlicher Verpflichtungen erforderlich ist. Brevo gewährleistet ein angemessenes Datenschutzniveau, hat technische und organisatorische Maßnahmen zum Schutz Ihrer Daten implementiert und verarbeitet die Daten nur im Rahmen der von uns vorgegebenen Zwecke. Sie haben jederzeit das Recht, Ihre Einwilligung zu widerrufen, wodurch die weitere Nutzung Ihrer Daten für Werbezwecke beendet wird, soweit keine gesetzlichen Aufbewahrungspflichten entgegenstehen.
    </p>
    <p className="mb-3">
      Die Angabe zusätzlicher personenbezogener Daten, wie Telefonnummer, Adresse oder Daten Ihres Kindes, erfolgt freiwillig, um eine individuelle Ansprache zu ermöglichen, organisatorische Abläufe zu optimieren oder spezielle Angebote bereitzustellen. Für Kinder geben Sie als Erziehungsberechtigter ausdrücklich Ihre Einwilligung in die Verarbeitung der personenbezogenen Daten Ihres Kindes. Sie versichern, dass die von Ihnen angegebenen Daten korrekt, vollständig und aktuell sind.
    </p>
    <p className="mb-3">
      Ihre Daten werden ausschließlich zur Verwaltung der Anmeldung, für den Versand von Informationen, Angeboten, Promotions und Aktionen, für die Kommunikation im Rahmen des Newsletters sowie für interne Analysen und Optimierungen verwendet. Eine Nutzung der Daten zu anderen Zwecken erfolgt nicht. Sie haben jederzeit das Recht, der Verarbeitung Ihrer personenbezogenen Daten zu Werbezwecken zu widersprechen, wobei die weitere Verarbeitung ausschließlich dann erfolgen kann, wenn zwingende, schutzwürdige Gründe vorliegen, die Ihre Interessen, Rechte und Freiheiten überwiegen, oder wenn die Verarbeitung der Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen dient.
    </p>
    <p className="mb-3">
      Für die Anmeldung zu unserem Newsletter ist ausschließlich Ihre E-Mail-Adresse erforderlich. Weitere Angaben, wie Name, Geburtsdatum, Telefonnummer oder Kinderdaten, sind freiwillig und dienen der personalisierten Ansprache. Es erfolgt kein Double-Opt-in-Verfahren; Ihre Daten werden unmittelbar nach Absenden des Formulars in unserem Newsletter-System Brevo gespeichert und für den Versand von Informationen verwendet. Sie können den Newsletter jederzeit abbestellen, indem Sie den Abmeldelink im Newsletter nutzen oder uns eine entsprechende Nachricht an die im Formular angegebene E-Mail-Adresse senden. Nach Abmeldung werden Ihre Daten unverzüglich aus unserem Newsletter-Verteiler gelöscht, soweit keine anderweitigen gesetzlichen Aufbewahrungspflichten bestehen.
    </p>
    <p className="mb-3">
      Ihre personenbezogenen Daten werden so lange gespeichert, wie dies für die Zwecke, für die sie erhoben wurden, erforderlich ist, oder bis Sie Ihre Einwilligung widerrufen. Gesetzliche Aufbewahrungsfristen, beispielsweise nach handels- oder steuerrechtlichen Vorgaben, bleiben unberührt. Daten, die nicht mehr benötigt werden, werden routinemäßig gelöscht. Für Daten, die auf Grundlage unseres berechtigten Interesses verarbeitet werden, können Sie jederzeit Widerspruch einlegen; in diesem Fall wird die Verarbeitung eingestellt, es sei denn, es liegen zwingende, schutzwürdige Gründe vor, die Ihre Interessen, Rechte und Freiheiten überwiegen, oder die Verarbeitung dient der Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen.
    </p>
    <p className="mb-3">
      Wir weisen ausdrücklich darauf hin, dass die Nutzung der Dienste von Brevo dazu führen kann, dass Ihre Daten auf Servern in der Europäischen Union oder in Drittländern, insbesondere in den USA, verarbeitet und gespeichert werden. Brevo hat sich dem EU-US-Datenschutzrahmen (EU-US Data Privacy Framework) angeschlossen und gewährleistet damit ein angemessenes Datenschutzniveau in Übereinstimmung mit den Anforderungen der DSGVO.
    </p>
    <p className="mb-3">
      Sie haben das Recht auf Auskunft über die zu Ihrer Person gespeicherten Daten, das Recht auf Berichtigung unrichtiger Daten, das Recht auf Löschung, das Recht auf Einschränkung der Verarbeitung, das Recht auf Unterrichtung über Datenverarbeitungen, das Recht auf Datenübertragbarkeit, das Recht auf Widerruf Ihrer Einwilligung sowie das Recht, eine Beschwerde bei der zuständigen Aufsichtsbehörde einzureichen. Der Widerruf der Einwilligung oder der Widerspruch gegen die Verarbeitung zu Werbezwecken kann jederzeit mit Wirkung für die Zukunft erfolgen.
    </p>
    <p className="mb-3">
      Sie erkennen an, dass wir keine Haftung für technische Störungen, Datenverlust während der Übertragung oder für die Speicherung Ihrer Daten auf den Servern von Brevo übernehmen. Brevo ist für die sichere Speicherung und den Schutz Ihrer Daten verantwortlich, und wir haben mit Brevo einen Vertrag zur Auftragsverarbeitung abgeschlossen, der die Einhaltung der Datenschutzbestimmungen sicherstellt und eine unberechtigte Weitergabe an Dritte ausschließt. Die Datenübertragung erfolgt verschlüsselt, um die Sicherheit Ihrer personenbezogenen Daten zu gewährleisten.
    </p>
    <p className="mb-3">
      Mit der Nutzung des Formulars erklären Sie sich damit einverstanden, dass wir Ihre Daten ausschließlich für die in dieser Erklärung genannten Zwecke verarbeiten. Sie verpflichten sich, keine falschen, irreführenden oder unvollständigen Angaben zu machen. Für die Verarbeitung von Daten von Minderjährigen ist stets die Zustimmung der Erziehungsberechtigten erforderlich. Sollten sich Ihre Angaben ändern oder nicht mehr korrekt sein, bitten wir um eine entsprechende Aktualisierung.
    </p>
    <p>
      Wir behalten uns das Recht vor, diese Datenschutzerklärung und die Nutzungsbedingungen jederzeit anzupassen, um Änderungen der Rechtslage, der Datenverarbeitung oder der von uns eingesetzten Technologien Rechnung zu tragen. Die jeweils aktuelle Fassung ist auf unserer Website einsehbar. Durch die weitere Nutzung des Formulars nach Veröffentlichung von Änderungen erklären Sie sich mit der aktualisierten Fassung einverstanden.
    </p>

    <h3 className="text-xl text-zinc-900 dark:text-zinc-100 mb-3 mt-6">7.3 WhatsApp-Newsletter</h3>
    <p className="mb-3">
      Wenn Sie sich zu unserem WhatsApp-Newsletter anmelden, übersenden wir Ihnen regelmäßig Informationen zu unseren Angeboten per WhatsApp. Pflichtangabe für die Übersendung des Newsletters ist allein Ihre Mobilfunknummer.
    </p>
    <p className="mb-3">
      Für den Versand des Newsletters nehmen Sie unsere mitgeteilte Mobilfunknummer in die Adress-Kontakte Ihres Mobilfunkgeräts auf und senden uns die Nachricht „Start" per WhatsApp. Mit der Übersendung dieser WhatsApp-Nachricht erteilen Sie uns Ihre Einwilligung für die Nutzung Ihrer personenbezogenen Daten gemäß Art. 6 Abs. 1 lit. a DSGVO zum Zwecke der Newsletteübersendung. Wir nehmen Sie sodann in unseren Newsletter-Verteiler auf.
    </p>
    <p className="mb-3">
      Die von uns bei der Anmeldung zum Newsletter erhobenen Daten werden ausschließlich für Zwecke der werblichen Ansprache im Wege des Newsletters verarbeitet. Sie können jederzeit den Newsletter abmelden, indem Sie uns die Nachricht „Stop" per WhatsApp senden. Nach erfolgter Abmeldung wird Ihre Mobilfunknummer unverzüglich in unserem Newsletter-Verteiler gelöscht, soweit Sie nicht ausdrücklich in eine weitere Nutzung Ihrer Daten eingewilligt haben oder wir uns eine darüberhinausgehende Datenverwendung vorbehalten, die gesetzlich erlaubt ist und über die wir Sie in dieser Erklärung informieren.
    </p>
    <p className="mb-3">
      Bitte beachten Sie, dass WhatsApp Zugriff auf das Adressbuch des von uns für den Newsletterversand verwendeten mobilen Endgeräts erhält und im Adressbuch gespeicherte Telefonnummern automatisch an einen Server von Facebook in den USA überträgt.
    </p>
    <p className="mb-3">
      Für den Versand unseres WhatsApp-Newsletters verwenden wir daher ein mobiles Endgerät, in dessen Adressbuch ausschließlich die WhatsApp-Kontaktdaten unserer Newsletter-Empfänger gespeichert werden. Hierdurch wird sichergestellt, dass jede Person, deren WhatsApp- Kontaktdaten in unserem Adressbuch gespeichert sind, bereits bei erstmaliger Nutzung der App auf seinem Gerät durch Akzeptanz der WhatsApp-Nutzungsbedingungen in die Übermittlung seiner WhatsApp-Telefonnummer aus den Adressbüchern seiner Chat-Kontakte gemäß Art. 6 Abs. 1 lit. a DSGVO eingewilligt hat. Eine Übermittlung von Daten solcher Nutzer, die WhatsApp nicht verwenden und/oder uns nicht über WhatsApp kontaktiert haben, wird insofern ausgeschlossen.
    </p>
    <p className="mb-3">
      Zweck und Umfang der Datenerhebung und die weitere Verarbeitung und Nutzung der Daten durch WhatsApp sowie Ihre diesbezüglichen Rechte und Einstellungsmöglichkeiten zum Schutz Ihrer Privatsphäre entnehmen Sie bitte den Datenschutzhinweisen von WhatsApp: https://www.whatsapp.com/legal/?eea=1#privacy-policy
    </p>
    <p className="mb-3">
      Im Rahmen der oben genannten Verarbeitungen kann es zu Datenübertragungen an Server von Meta Platforms Inc. in den USA kommen.
    </p>
    <p>
      Für Datenübermittlungen in die USA hat sich der Anbieter dem EU-US-Datenschutzrahmen (EU-US Data Privacy Framework) angeschlossen, das auf Basis eines Angemessenheitsbeschlusses der Europäischen Kommission die Einhaltung des europäischen Datenschutzniveaus sicherstellt.
    </p>
  </section>

  <section>
    <h2 className="text-2xl text-zinc-900 dark:text-zinc-100 mb-4">8) Webanalysedienste</h2>
    
    <h3 className="text-xl text-zinc-900 dark:text-zinc-100 mb-3 mt-6">8.1 Polyfill</h3>
    <p className="mb-3">
      Diese Website nutzt den Dienst des folgenden Anbieters: The Financial Times Ltd., Bracken House, 1 Friday Street, London, England, EC4M 9BT
    </p>
    <p className="mb-3">
      Der Dienst installiert auf unserer Website ein Skript, das es ermöglicht, Inhalte auch auf älteren Browserversionen in hoher Qualität wiederzugeben, indem bei der Browseranfrage Polyfill-Dateien bereitgestellt und übermittelt werden, um fehlende Browserfunktionen zu überbrücken. Hierfür werden an den Anbieter automatisch bestimmte technische Informationen wie Browser-Details und Verbindungsdaten einschließlich Ihrer IP-Adresse in anonymisierter Form weitergegeben.
    </p>
    <p className="mb-3">
      Die Informationen werden dazu verwendet, festzustellen, welche Polyfill-Dateien zur ordnunsgemäßen Wiedergabe der Seiteninhalte von Ihrem Browser benötigt werden.
    </p>
    <p className="mb-3">
      Sofern hierbei auch personenbezogene Daten verarbeitet werden, erfolgt die Verarbeitung auf Basis unserer berechtigten Interessen an der optimalen Darstellung unseres Internetauftritts und der Optimierung des Nutzererlebnisses gemäß Art. 6 Abs. 1 lit. f DSGVO.
    </p>
    <p>
      Bei einer Datenübermittlung an den Anbieterstandort ist ein angemessenes Datenschutzniveau durch einen Angemessenheitsbeschluss der Europäischen Kommission gewährleistet.
    </p>

    <h3 className="text-xl text-zinc-900 dark:text-zinc-100 mb-3 mt-6">8.2 Wix Analytics</h3>
    <p className="mb-3">
      Diese Website nutzt den Webanalysedienst des folgenden Anbieters: Wix HQ, 6350671, Nemal Tel Aviv St 40, Tel Aviv-Yafo, Israel
    </p>
    <p className="mb-3">
      Mithilfe von Cookies und/oder vergleichbaren Technologien (Tracking-Pixel, Web-Beacons, Algorithmen zum Auslesen von Endgeräte- und Browserinformationen) erhebt und speichert der Dienst pseudonymisierte Besucherdaten, darunter Informationen des verwendeten Endgeräts wie die IP-Adresse und Browserinformationen, um sie für statistische Analysen des Nutzungsverhaltens auf unserer Website auszuwerten und pseudonymisierte Nutzungsprofile zu erstellen. Unter anderem ist so die Auswertung von Bewegungsmustern (sog. Heatmaps) möglich, welche die Dauer von Seitenbesuchen sowie Interaktionen mit Seiteninhalten (z. B. Texteingaben, Scrollen, Klicks und Mouse-Overs) aufzeigen. Die Pseudonymisierung schließt eine direkte Personenbeziehbarkeit grundsätzlich aus. Eine Zusammenführung mit auf andere Weise erhobenen Klardaten zu Ihrer Person findet nicht statt.
    </p>
    <p className="mb-3">
      Alle oben beschriebenen Verarbeitungen, insbesondere das Auslesen oder Speichern von Informationen auf dem verwendeten Endgerät, werden nur dann vollzogen, wenn Sie uns gemäß Art. 6 Abs. 1 lit. a DSGVO dazu Ihre ausdrückliche Einwilligung erteilt haben. Sie können Ihre erteilte Einwilligung jederzeit mit Wirkung für die Zukunft widerrufen, indem Sie diesen Dienst in dem auf der Webseite bereitgestellten „Cookie-Consent-Tool" deaktivieren.
    </p>
    <p className="mb-3">
      Wir haben mit dem Anbieter einen Auftragsverarbeitungsvertrag geschlossen, der den Schutz der Daten unserer Seitenbesucher sicherstellt und eine unberechtigte Weitergabe an Dritte untersagt.
    </p>
    <p>
      Bei einer Datenübermittlung an den Anbieterstandort ist ein angemessenes Datenschutzniveau durch einen Angemessenheitsbeschluss der Europäischen Kommission gewährleistet.
    </p>
  </section>

  <section>
    <h2 className="text-2xl text-zinc-900 dark:text-zinc-100 mb-4">9) Seitenfunktionalitäten</h2>
    
    <h3 className="text-xl text-zinc-900 dark:text-zinc-100 mb-3 mt-6">9.1 Facebook-Plugins</h3>
    <p className="mb-3">
      Auf unserer Website werden Plugins des sozialen Netzwerkes des folgenden Anbieters verwendet: Meta Platforms Ireland Ltd., 4 Grand Canal Square, Grand Canal Harbour, Dublin 2, Irland
    </p>
    <p className="mb-3">
      Diese Plugins ermöglichen direkte Interaktionen mit Inhalten auf dem sozialen Netzwerk.
    </p>
    <p className="mb-3">
      Um den Schutz Ihrer Daten beim Besuch unserer Website zu erhöhen, sind die Plugins zunächst deaktiviert mittels sogenannter „2-Klick"- oder „Shariff"-Lösung in die Seite eingebunden.
    </p>
    <p className="mb-3">
      Diese Einbindung gewährleistet, dass beim Aufruf einer Seite unseres Webauftritts, die solche Plugins enthält, noch keine Verbindung mit den Servern des Anbieters hergestellt wird.
    </p>
    <p className="mb-3">
      Erst wenn Sie die Plugins aktivieren und damit gemäß Art. 6 Abs. 1 lit. a DSGVO Ihre Einwilligung in die Datenübermittlung erteilen, stellt Ihr Browser eine direkte Verbindung zu den Servern des Anbieters her. Hierbei werden, unabhängig von einem Login in ein vorhandenes Nutzerprofil, in bestimmtem Umfang Informationen über Ihr verwendetes Endgerät (darunter Ihre IP-Adresse), Ihren Browser und Ihren Seitenverlauf an den Anbieter übermittelt und dort gegebenenfalls weiterverarbeitet.
    </p>
    <p className="mb-3">
      Wenn Sie in ein vorhandenes Nutzerprofil auf dem sozialen Netzwerk des Anbieters eingeloggt sind, werden Informationen zu über die Plugins vollzogenen Interaktionen außerdem dort veröffentlicht und Ihren Kontakten angezeigt.
    </p>
    <p className="mb-3">
      Sie können Ihre Einwilligung jederzeit widerrufen indem Sie das aktivierte Plugin durch erneutes Anklicken wieder deaktivieren. Der Widerruf hat jedoch keinen Einfluss auf die Daten, die bereits an den Anbieter übertragen wurden.
    </p>
    <p className="mb-3">
      Daten können zudem übertragen werden an: Meta Platforms Inc., USA
    </p>
    <p className="mb-3">
      Wir haben mit dem Anbieter einen Auftragsverarbeitungsvertrag geschlossen, der den Schutz der Daten unserer Seitenbesucher sicherstellt und eine unberechtigte Weitergabe an Dritte untersagt.
    </p>
    <p>
      Für Datenübermittlungen in die USA hat sich der Anbieter dem EU-US-Datenschutzrahmen (EU-US Data Privacy Framework) angeschlossen, das auf Basis eines Angemessenheitsbeschlusses der Europäischen Kommission die Einhaltung des europäischen Datenschutzniveaus sicherstellt.
    </p>

    <h3 className="text-xl text-zinc-900 dark:text-zinc-100 mb-3 mt-6">9.2 Instagram-Plugins</h3>
    <p className="mb-3">
      Auf unserer Website werden Plugins des sozialen Netzwerkes des folgenden Anbieters verwendet: Meta Platforms Ireland Ltd., 4 Grand Canal Square, Grand Canal Harbour, Dublin 2 Irland
    </p>
    <p className="mb-3">
      Diese Plugins ermöglichen direkte Interaktionen mit Inhalten auf dem sozialen Netzwerk.
    </p>
    <p className="mb-3">
      Um den Schutz Ihrer Daten beim Besuch unserer Website zu erhöhen, sind die Plugins zunächst deaktiviert mittels sogenannter „2-Klick"- oder „Shariff"-Lösung in die Seite eingebunden.
    </p>
    <p className="mb-3">
      Diese Einbindung gewährleistet, dass beim Aufruf einer Seite unseres Webauftritts, die solche Plugins enthält, noch keine Verbindung mit den Servern des Anbieters hergestellt wird.
    </p>
    <p className="mb-3">
      Erst wenn Sie die Plugins aktivieren und damit gemäß Art. 6 Abs. 1 lit. a DSGVO Ihre Einwilligung in die Datenübermittlung erteilen, stellt Ihr Browser eine direkte Verbindung zu den Servern des Anbieters her. Hierbei werden, unabhängig von einem Login in ein vorhandenes Nutzerprofil, in bestimmtem Umfang Informationen über Ihr verwendetes Endgerät (darunter Ihre IP-Adresse), Ihren Browser und Ihren Seitenverlauf an den Anbieter übermittelt und dort gegebenenfalls weiterverarbeitet.
    </p>
    <p className="mb-3">
      Wenn Sie in ein vorhandenes Nutzerprofil auf dem sozialen Netzwerk des Anbieters eingeloggt sind, werden Informationen zu über die Plugins vollzogenen Interaktionen außerdem dort veröffentlicht und Ihren Kontakten angezeigt.
    </p>
    <p className="mb-3">
      Sie können Ihre Einwilligung jederzeit widerrufen indem Sie das aktivierte Plugin durch erneutes Anklicken wieder deaktivieren. Der Widerruf hat jedoch keinen Einfluss auf die Daten, die bereits an den Anbieter übertragen wurden.
    </p>
    <p className="mb-3">
      Daten können zudem übertragen werden: Meta Platforms Inc., USA
    </p>
    <p className="mb-3">
      Wir haben mit dem Anbieter einen Auftragsverarbeitungsvertrag geschlossen, der den Schutz der Daten unserer Seitenbesucher sicherstellt und eine unberechtigte Weitergabe an Dritte untersagt.
    </p>
    <p>
      Für Datenübermittlungen in die USA hat sich der Anbieter dem EU-US-Datenschutzrahmen (EU-US Data Privacy Framework) angeschlossen, das auf Basis eines Angemessenheitsbeschlusses der Europäischen Kommission die Einhaltung des europäischen Datenschutzniveaus sicherstellt.
    </p>

    <h3 className="text-xl text-zinc-900 dark:text-zinc-100 mb-3 mt-6">9.3 Google Maps</h3>
    <p className="mb-3">
      Diese Webseite nutzt einen Online-Kartendienst des folgenden Anbieters: Google Maps (API) von Google Ireland Limited, Gordon House, 4 Barrow St, Dublin, D04 E5W5, Irland ("Google").
    </p>
    <p className="mb-3">
      Google Maps ist ein Webdienst zur Darstellung von interaktiven (Land-)Karten, um geographische Informationen visuell darzustellen. Über die Nutzung dieses Dienstes wird Ihnen unser Standort angezeigt und eine etwaige Anfahrt erleichtert.
    </p>
    <p className="mb-3">
      Bereits beim Aufrufen derjenigen Unterseiten, in die die Karte von Google Maps eingebunden ist, werden Informationen über Ihre Nutzung unserer Website (wie z.B. Ihre IP-Adresse) an Server von Google übertragen und dort gespeichert, hierbei kann es auch zu einer Übermittlung an die Server der Google LLC. in den USA kommen. Dies erfolgt unabhängig davon, ob Google ein Nutzerkonto bereitstellt, über das Sie eingeloggt sind oder ob ein Nutzerkonto besteht. Wenn Sie bei Google eingeloggt sind, werden Ihre Daten direkt Ihrem Konto zugeordnet. Wenn Sie die Zuordnung mit Ihrem Profil bei Google nicht wünschen, müssen Sie sich vor Aktivierung des Buttons ausloggen. Google speichert Ihre Daten (selbst für nicht eingeloggte Nutzer) als Nutzungsprofile und wertet diese aus.
    </p>
    <p className="mb-3">
      Die Erhebung, Speicherung und die Auswertung erfolgen gemäß Art. 6 Abs. 1 lit. f DSGVO auf Basis des berechtigten Interesses von Google an der Einblendung personalisierter Werbung, Marktforschung und/oder der bedarfsgerechten Gestaltung von Google-Websites. Ihnen steht ein Widerspruchsrecht gegen die Bildung dieser Nutzerprofile zu, wobei Sie sich für dessen Ausübung an Google wenden müssen. Wenn Sie mit der künftigen Übermittlung Ihrer Daten an Google im Rahmen der Nutzung von Google Maps nicht einverstanden sind, besteht auch die Möglichkeit, den Webdienst von Google Maps vollständig zu deaktivieren, indem Sie die Anwendung JavaScript in Ihrem Browser ausschalten. Google Maps und damit auch die Kartenanzeige auf dieser Internetseite kann dann nicht genutzt werden.
    </p>
    <p className="mb-3">
      Soweit rechtlich erforderlich, haben wir zur vorstehend dargestellten Verarbeitung Ihrer Daten Ihre Einwilligung gemäß Art. 6 Abs. 1 lit. a DSGVO eingeholt. Sie können Ihre erteilte Einwilligung jederzeit mit Wirkung für die Zukunft widerrufen. Um Ihren Widerruf auszuüben, befolgen Sie bitte die vorstehend geschilderte Möglichkeit zur Vornahme eines Widerspruchs.
    </p>
    <p>
      Für Datenübermittlungen in die USA hat sich der Anbieter dem EU-US-Datenschutzrahmen (EU-US Data Privacy Framework) angeschlossen, das auf Basis eines Angemessenheitsbeschlusses der Europäischen Kommission die Einhaltung des europäischen Datenschutzniveaus sicherstellt.
    </p>

    <h3 className="text-xl text-zinc-900 dark:text-zinc-100 mb-3 mt-6">9.4 Google Translate</h3>
    <p className="mb-3">
      Diese Seite nutzt über eine API-Einbindung den Übersetzungsdienst "Google Translate" der Google Ireland Limited, Gordon House, 4 Barrow St, Dublin, D04 E5W5, Irland („Google"). Damit die Übersetzung nach Ihrer Wahl einer Landessprache automatisiert angezeigt wird, nimmt der von Ihnen verwendete Browser Verbindung zu den Servern von Google auf. Google verwendet hierbei sog. "Cookies", das sind Textdateien, die auf Ihrem Computer gespeichert werden und die eine Analyse Ihrer Nutzung der Website ermöglichen. Die durch das Cookie erzeugten Informationen über Ihre Benutzung dieser Website (einschließlich der gekürzten IP-Adresse) werden in der Regel an einen Server von Google übertragen und dort gespeichert, hierbei kann es auch zu einer Übermittlung an die Server der Google LLC. in den USA kommen.
    </p>
    <p className="mb-3">
      Sofern personenbezogene Daten verarbeitet werden, erfolgt dies gemäß Art. 6 Abs. 1 lit. f DSGVO auf Basis unseres berechtigten Interesses an einer barrierefreien und universellen Zugänglichkeit unseres Internetauftritts.
    </p>
    <p className="mb-3">
      Soweit rechtlich erforderlich, haben wir zur vorstehend dargestellten Verarbeitung Ihrer Daten Ihre Einwilligung gemäß Art. 6 Abs. 1 lit. a DSGVO eingeholt. Sie können Ihre erteilte Einwilligung jederzeit mit Wirkung für die Zukunft widerrufen. Um Ihren Widerruf auszuüben, deaktivieren Sie diesen Dienst im auf der Webseite bereitgestellten "Cookie-Consent-Tool".
    </p>
    <p>
      Für Datenübermittlungen in die USA hat sich der Anbieter dem EU-US-Datenschutzrahmen (EU-US Data Privacy Framework) angeschlossen, das auf Basis eines Angemessenheitsbeschlusses der Europäischen Kommission die Einhaltung des europäischen Datenschutzniveaus sicherstellt.
    </p>

    <h3 className="text-xl text-zinc-900 dark:text-zinc-100 mb-3 mt-6">9.5 Google Kundenrezensionen (ehemals Google Zertifizierter-Händler-Programm)</h3>
    <p className="mb-3">
      Wir arbeiten mit Google im Rahmen des Programms „Google Kundenrezensionen" zusammen. Der Anbieter ist Google Ireland Limited, Gordon House, 4 Barrow St, Dublin, D04 E5W5, Irland ("Google"). Dieses Programm gibt uns die Möglichkeit, Kundenrezensionen von Nutzern unserer Website einzuholen. Hierbei werden Sie nach einem Einkauf auf unserer Website gefragt, ob Sie an einer E-Mail-Umfrage von Google teilnehmen möchten.
    </p>
    <p className="mb-3">
      Wenn Sie Ihre Einwilligung gemäß Art. 6 Abs. 1 lit. a DSGVO erteilen, übermitteln wir Ihre E-Mail-Adresse an Google. Sie erhalten eine E-Mail von Google Kundenrezensionen, in der Sie gebeten werden, die Kauferfahrung auf unserer Website zu bewerten. Die von Ihnen abgegebene Bewertung wird anschließend mit unseren anderen Bewertungen zusammengefasst und in unserem Logo Google Kundenrezensionen sowie in unserem Merchant Center-Dashboard angezeigt. Außerdem wird Ihre Bewertung für Google Verkäuferbewertungen genutzt. Im Rahmen der Nutzung von Google Kundenrezensionen kann es auch zu einer Übermittlung von personenbezogenen Daten an die Server der Google LLC. in den USA kommen.
    </p>
    <p className="mb-3">
      Sie können Ihre Einwilligung jederzeit durch eine Nachricht an den für die Datenverarbeitung Verantwortlichen oder gegenüber Google widerrufen.
    </p>
    <p>
      Für Datenübermittlungen in die USA hat sich der Anbieter dem EU-US-Datenschutzrahmen (EU-US Data Privacy Framework) angeschlossen, das auf Basis eines Angemessenheitsbeschlusses der Europäischen Kommission die Einhaltung des europäischen Datenschutzniveaus sicherstellt.
    </p>

    <h3 className="text-xl text-zinc-900 dark:text-zinc-100 mb-3 mt-6">9.6 Bewerbungen auf Stellenausschreibungen per E-Mail</h3>
    <p className="mb-3">
      Auf unserer Website schreiben wir in einer gesonderten Rubrik aktuell vakante Stellen aus, auf die sich Interessenten per E-Mail an die bereitgestellte Kontaktadresse bewerben können.
    </p>
    <p className="mb-3">
      Die Bewerber müssen alle personenbezogenen Daten angeben, die für eine fundierte Beurteilung erforderlich sind, einschließlich allgemeiner Informationen wie Name, Anschrift und Kontaktmöglichkeiten, sowie leistungsbezogene Nachweise und gegebenenfalls gesundheitsbezogene Angaben. Einzelheiten zur Bewerbung sind der Stellenausschreibung zu entnehmen.
    </p>
    <p className="mb-3">
      Nach Eingang der Bewerbung per E-Mail werden die Daten ausschließlich zum Zwecke der Bewerbungsbearbeitung gespeichert und ausgewertet. Bei Rückfragen nutzen wir entweder die E-Mail-Adresse oder Telefonnummer des Bewerbers. Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO (bzw. § 26 Abs. 1 BDSG), in deren Sinne das Durchlaufen des Bewerbungsverfahrens als Arbeitsvertragsanbahnung gilt.
    </p>
    <p className="mb-3">
      Soweit im Rahmen des Bewerbungsverfahrens besondere Kategorien von personenbezogenen Daten im Sinne des Art. 9 Abs. 1 DSGVO (z.B. Gesundheitsdaten wie Angaben über die Schwerbehinderteneigenschaft) bei Bewerbern angefragt werden, erfolgt die Verarbeitung gemäß Art. 9 Abs. 2 lit. b. DSGVO, damit wir die aus dem Arbeitsrecht und dem Recht der sozialen Sicherheit und des Sozialschutzes erwachsenden Rechte ausüben und unseren diesbezüglichen Pflichten nachkommen können.
    </p>
    <p className="mb-3">
      Kumulativ oder alternativ kann die Verarbeitung der besonderen Datenkategorien auch auf Art. 9 Abs. 1 lit. h DSGVO gestützt sein, wenn sie zu Zwecken der Gesundheitsvorsorge oder der Arbeitsmedizin, für die Beurteilung der Arbeitsfähigkeit des Bewerbers, für die medizinische Diagnostik, die Versorgung oder Behandlung im Gesundheits- oder Sozialbereich oder für die Verwaltung von Systemen und Diensten im Gesundheits- oder Sozialbereich erfolgt.
    </p>
    <p className="mb-3">
      Kommt es nicht zu einer Auswahl des Bewerbers oder zieht ein Bewerber seine Bewerbung vorzeitig zurück, werden dessen übermittelte Daten sowie sämtlicher elektronischer Schriftverkehr einschließlich der Bewerbungsmail nach einer entsprechenden Benachrichtigung spätestens nach 6 Monaten gelöscht. Diese Frist bemisst sich nach unserem berechtigten Interesse, etwaige Anschlussfragen zu der Bewerbung zu beantworten und gegebenenfalls unseren Nachweispflichten aus den Vorschriften zur Gleichbehandlung von Bewerbern nachkommen zu können.
    </p>
    <p>
      Im Falle einer erfolgreichen Bewerbung werden die zur Verfügung gestellten Daten auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO (bei Verarbeitung in Deutschland i.V.m. § 26 Abs. 1 BDSG) zum Zwecke der Durchführung des Beschäftigungsverhältnisses verarbeitet.
    </p>

    <h3 className="text-xl text-zinc-900 dark:text-zinc-100 mb-3 mt-6">9.7 Online-Bewerbungen über ein Formular</h3>
    <p className="mb-3">
      Auf unserer Website schreiben wir in einer gesonderten Rubrik aktuell vakante Stellen aus, auf die sich Interessenten über ein entsprechendes Formular bewerben können.
    </p>
    <p className="mb-3">
      Die Bewerber müssen alle personenbezogenen Daten angeben, die für eine fundierte Beurteilung erforderlich sind, einschließlich allgemeiner Informationen wie Name, Anschrift und Kontaktmöglichkeiten, sowie leistungsbezogene Nachweise und gegebenenfalls gesundheitsbezogene Angaben. Einzelheiten zur Bewerbung sind der Stellenausschreibung zu entnehmen.
    </p>
    <p className="mb-3">
      Im Zuge des Absendens des Formulars werden die Bewerberdaten entsprechend dem Stand der Technik verschlüsselt an uns übermittelt, von uns gespeichert und ausschließlich zum Zwecke der Bewerbungsbearbeitung ausgewertet. Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO (bzw. § 26 Abs. 1 BDSG), in deren Sinne das Durchlaufen des Bewerbungsverfahrens als Arbeitsvertragsanbahnung gilt.
    </p>
    <p className="mb-3">
      Soweit im Rahmen des Bewerbungsverfahrens besondere Kategorien von personenbezogenen Daten im Sinne des Art. 9 Abs. 1 DSGVO (z.B. Gesundheitsdaten wie Angaben über die Schwerbehinderteneigenschaft) bei Bewerbern angefragt werden, erfolgt die Verarbeitung gemäß Art. 9 Abs. 2 lit. b. DSGVO, damit wir die aus dem Arbeitsrecht und dem Recht der sozialen Sicherheit und des Sozialschutzes erwachsenden Rechte ausüben und unseren diesbezüglichen Pflichten nachkommen können.
    </p>
    <p className="mb-3">
      Kumulativ oder alternativ kann die Verarbeitung der besonderen Datenkategorien auch auf Art. 9 Abs. 1 lit. h DSGVO gestützt sein, wenn sie zu Zwecken der Gesundheitsvorsorge oder der Arbeitsmedizin, für die Beurteilung der Arbeitsfähigkeit des Bewerbers, für die medizinische Diagnostik, die Versorgung oder Behandlung im Gesundheits- oder Sozialbereich oder für die Verwaltung von Systemen und Diensten im Gesundheits- oder Sozialbereich erfolgt.
    </p>
    <p className="mb-3">
      Kommt es nicht zu einer Auswahl des Bewerbers oder zieht ein Bewerber seine Bewerbung vorzeitig zurück, werden dessen formularmäßig übermittelte Daten sowie sämtlicher elektronischer Schriftverkehr einschließlich der Bewerbungsmail nach einer entsprechenden Benachrichtigung spätestens nach 6 Monaten gelöscht. Diese Frist bemisst sich nach unserem berechtigten Interesse, etwaige Anschlussfragen zu der Bewerbung zu beantworten und gegebenenfalls unseren Nachweispflichten aus den Vorschriften zur Gleichbehandlung von Bewerbern nachkommen zu können.
    </p>
    <p>
      Im Falle einer erfolgreichen Bewerbung werden die zur Verfügung gestellten Daten auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO (bei Verarbeitung in Deutschland i.V.m. § 26 Abs. 1 BDSG) zum Zwecke der Durchführung des Beschäftigungsverhältnisses verarbeitet.
    </p>
  </section>

  <section>
    <h2 className="text-2xl text-zinc-900 dark:text-zinc-100 mb-4">10) Rechte des Betroffenen</h2>
    
    <p className="mb-3">
      10.1 Das geltende Datenschutzrecht gewährt Ihnen gegenüber dem Verantwortlichen hinsichtlich der Verarbeitung Ihrer personenbezogenen Daten die nachstehenden Betroffenenrechte (Auskunfts- und Interventionsrechte), wobei für die jeweiligen Ausübungsvoraussetzungen auf die angeführte Rechtsgrundlage verwiesen wird:
    </p>
    
    <ul className="list-disc list-inside space-y-1 mb-3 ml-4">
      <li>Auskunftsrecht gemäß Art. 15 DSGVO;</li>
      <li>Recht auf Berichtigung gemäß Art. 16 DSGVO;</li>
      <li>Recht auf Löschung gemäß Art. 17 DSGVO;</li>
      <li>Recht auf Einschränkung der Verarbeitung gemäß Art. 18 DSGVO;</li>
      <li>Recht auf Unterrichtung gemäß Art. 19 DSGVO;</li>
      <li>Recht auf Datenübertragbarkeit gemäß Art. 20 DSGVO;</li>
      <li>Recht auf Widerruf erteilter Einwilligungen gemäß Art. 7 Abs. 3 DSGVO;</li>
      <li>Recht auf Beschwerde gemäß Art. 77 DSGVO.</li>
    </ul>

    <h3 className="text-xl text-zinc-900 dark:text-zinc-100 mb-3 mt-6">10.2 WIDERSPRUCHSRECHT</h3>
    <p className="mb-3 font-bold">
      WENN WIR IM RAHMEN EINER INTERESSENABWÄGUNG IHRE PERSONENBEZOGENEN DATEN AUFGRUND UNSERES ÜBERWIEGENDEN BERECHTIGTEN INTERESSES VERARBEITEN, HABEN SIE DAS JEDERZEITIGE RECHT, AUS GRÜNDEN, DIE SICH AUS IHRER BESONDEREN SITUATION ERGEBEN, GEGEN DIESE VERARBEITUNG WIDERSPRUCH MIT WIRKUNG FÜR DIE ZUKUNFT EINZULEGEN.
    </p>
    <p className="mb-3 font-bold">
      MACHEN SIE VON IHREM WIDERSPRUCHSRECHT GEBRAUCH, BEENDEN WIR DIE VERARBEITUNG DER BETROFFENEN DATEN ZU DIREKTWERBEZWECKEN.
    </p>
  </section>

  <section>
    <h2 className="text-2xl text-zinc-900 dark:text-zinc-100 mb-4">7) Dauer der Speicherung personenbezogener Daten</h2>
    <p className="mb-3">
      Die Dauer der Speicherung von personenbezogenen Daten bemisst sich anhand der jeweiligen Rechtsgrundlage, am Verarbeitungszweck und – sofern einschlägig – zusätzlich anhand der jeweiligen gesetzlichen Aufbewahrungsfrist (z.B. handels- und steuerrechtliche Aufbewahrungsfristen).
    </p>
    <p className="mb-3">
      Bei der Verarbeitung von personenbezogenen Daten auf Grundlage einer ausdrücklichen Einwilligung gemäß Art. 6 Abs. 1 lit. a DSGVO werden die betroffenen Daten so lange gespeichert, bis Sie Ihre Einwilligung widerrufen.
    </p>
    <p className="mb-3">
      Existieren gesetzliche Aufbewahrungsfristen für Daten, die im Rahmen rechtsgeschäftlicher bzw. rechtsgeschäftsähnlicher Verpflichtungen auf der Grundlage von Art. 6 Abs. 1 lit. b DSGVO verarbeitet werden, werden diese Daten nach Ablauf der Aufbewahrungsfristen routinemäßig gelöscht, sofern sie nicht mehr zur Vertragserfüllung oder Vertragsanbahnung erforderlich sind und/oder unsererseits kein berechtigtes Interesse an der Weiterspeicherung fortbesteht.
    </p>
    <p className="mb-3">
      Bei der Verarbeitung von personenbezogenen Daten auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO werden diese Daten so lange gespeichert, bis Sie Ihr Widerspruchsrecht nach Art. 21 Abs. 1 DSGVO ausüben, es sei denn, wir können zwingende schutzwürdige Gründe für die Verarbeitung nachweisen, die Ihre Interessen, Rechte und Freiheiten überwiegen, oder die Verarbeitung dient der Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen.
    </p>
    <p className="mb-3">
      Bei der Verarbeitung von personenbezogenen Daten zum Zwecke der Direktwerbung auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO werden diese Daten so lange gespeichert, bis Sie Ihr Widerspruchsrecht nach Art. 21 Abs. 2 DSGVO ausüben.
    </p>
    <p>
      Sofern sich aus den sonstigen Informationen dieser Erklärung über spezifische Verarbeitungssituationen nichts anderes ergibt, werden gespeicherte personenbezogene Daten im Übrigen dann gelöscht, wenn sie für die Zwecke, für die sie erhoben oder auf sonstige Weise verarbeitet wurden, nicht mehr notwendig sind.
    </p>
  </section>

  <section className="mt-8 pt-8 border-t border-zinc-300 dark:border-zinc-700">
    <p className="text-sm text-zinc-600 dark:text-zinc-400">
      © 2004-2024 · IT-Recht Kanzlei
    </p>
  </section>
    </div>
      </div>
      </div>
  );
}