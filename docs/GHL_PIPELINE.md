# GHL Pipeline — Camp NAC Summer Camp Inquiries

**Subaccount:** Camp NAC  
**Pipeline Name:** Summer Camp Enrollment 2025  
**Season:** Active now → July 31, 2025. Dormant Aug–Dec. Rebuild January 2026.

---

## Pipeline Stages

| # | Stage Name | Description |
|---|-----------|-------------|
| 1 | New Inquiry | Lead just submitted the enroll form. Uncontacted. |
| 2 | Contacted – Awaiting Response | Team sent first outreach (SMS + email). Waiting on reply. |
| 3 | Interested – Follow-Up Needed | Parent replied, expressed interest but hasn't committed. |
| 4 | Enrollment Packet Sent | Full enrollment info / brochure sent to parent. |
| 5 | Enrolled ✅ | Parent confirmed enrollment. Move to enrolled contact list. |
| 6 | Not Interested | Opted out or explicitly not interested. Tag and archive. |
| 7 | Lost – No Response | 3+ follow-up attempts, no reply. Archive for Jan re-engage. |

---

## Lead Source Tagging

All leads from this microsite should be tagged:
- `source: microsite-enroll`
- `campaign: summer-2025-urgency`
- `season: summer-2025`

This allows clean segmentation when the full system buildout happens in January.

---

## Automations

### On Form Submit (Webhook received)

**Trigger:** Webhook from enroll form  
**Actions:**
1. Create contact (First Name, Last Name, Email, Phone, Child Name, Child Age, Camp Interest, Start Week, Source)
2. Add to pipeline → Stage 1 (New Inquiry)
3. Apply tags: `source: microsite-enroll`, `summer-2025`, `sms-opted-in` (if checkbox checked)
4. Send internal notification to Camp NAC team email: "New summer camp inquiry from [First Name] [Last Name] — [Child Name], age [Child Age]. Camp interest: [Camp Interest]."
5. Wait 2 minutes
6. Send SMS to parent: "Hi [First Name]! Thanks for your interest in Camp NAC — Bucks County's most-loved summer camp 🌿 A member of our team will reach out shortly. Questions? Reply to this message. – Camp NAC Team"
7. Send email to parent (from Camp NAC email):
   - Subject: "Your Camp NAC inquiry is confirmed!"
   - Body: Warm confirmation, what happens next (team calls within 1 business day), link to campnac.com for more info, 2026 brochure download link if available

### Day 1 Follow-Up (if no response)

**Trigger:** 24 hours after Stage 1, still no reply  
**Actions:**
1. Send SMS: "Hi [First Name], this is the Camp NAC team following up on your summer camp inquiry for [Child Name]. We'd love to answer any questions — want to set up a quick call? Just reply here!"
2. Move to Stage 2 (Contacted – Awaiting Response)

### Day 3 Follow-Up (if still no response)

**Trigger:** 72 hours in Stage 2, no reply  
**Actions:**
1. Send email: Subject "Still thinking about Camp NAC?" — friendly reminder, urgency note about limited spots, link to enroll page
2. Log note: "Day 3 follow-up sent"

### Day 7 Final Follow-Up

**Trigger:** 7 days with no engagement  
**Actions:**
1. Final SMS: "Hi [First Name] — just wanted to make sure you got our messages about Camp NAC for [Child Name]. Summer spots are filling fast! If you're still interested, reply YES and we'll save a spot. 🏕️"
2. If no response after 48 hours → move to Stage 7 (Lost – No Response)
3. Add tag: `re-engage-january-2026`

### On Enrollment Confirmed

**Trigger:** Contact moved to Stage 5 (Enrolled)  
**Actions:**
1. Send SMS: "🎉 Welcome to Camp NAC, [Child Name]! We can't wait to see you this summer. You'll receive your enrollment packet by email shortly. – Camp NAC Team"
2. Send enrollment confirmation email with next steps
3. Remove urgency tags, add `enrolled-summer-2025`
4. Add to enrolled contact list for future NPS/review requests post-camp

---

## Custom Fields to Create in GHL

| Field Label | Field Type | Required |
|-------------|-----------|----------|
| Child's Name | Text | Yes |
| Child's Age | Number | Yes |
| Camp Interest | Multi-select | No |
| Preferred Start Week | Dropdown | No |
| Heard About Us | Dropdown | No |
| Enrollment Status | Dropdown (matches pipeline) | Auto |

---

## Webhook Payload Structure

The enroll form should POST this JSON to the GHL webhook:

```json
{
  "firstName": "Jane",
  "lastName": "Smith",
  "email": "jane@example.com",
  "phone": "+12155551234",
  "childName": "Alex",
  "childAge": 8,
  "campInterest": ["STEM", "Sports"],
  "preferredStartWeek": "June 23, 2025",
  "heardAboutUs": "Facebook Ad",
  "message": "Alex loves science and outdoor activities.",
  "smsOptIn": true,
  "source": "microsite-enroll",
  "campaign": "summer-2025-urgency"
}
```

---

## Notes for January Full Buildout

When the full GHL system is built in January 2026, this pipeline becomes the foundation. Planned additions:
- Full Schools Out Camp pipeline
- Village Farm Camp pipeline
- Year-round inquiry pipeline
- Missed call text-back workflow
- Review request automation post-camp
- Re-enrollment campaign for returning families
- Parent portal / document delivery via GHL
