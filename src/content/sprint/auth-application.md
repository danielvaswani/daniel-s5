---
title: Auth Application
publishDate: 2023-03-10 00:00:00
img: /assets/stock-2.jpg
img_alt: A bright pink sheet of paper used to wrap flowers curves in front of rich blue background
description: |
  NotulenSoftware needed to switch over their current authentication solution from PHP Laravel blade to react, So it can have a unified frontend.
tags:
  - Fullstack Dev
  - Visual Design
  - UX/UI Research
---

NotulenSoftware needing their authentication solution to be ported to React, offered an opportunity to come up with a redesign with users in mind.

Many questions can arise from this, specifically, what are users pain points in general with corporate productivity SaaS? (Software as a Service). 

What can we do to improve UX, but not compromise on security?

After much research ..., it was concluded that adding more social integrations would be the way to go, Furthermore, based on the target persona, being a leader / employee from ages 22-45, who are often times logged in to their email inbox on another browser tab, email OTP logins seem to be a very simple and effective solution. It offers the least friction and allows the user to get where they want to be quickly. Research shows that users will avoid authentication and its steps whenever possible. OTP provides a reasonable amount of security and can be easily turned to 2FA given the users preferences in the future. 

Another authentication method that could be added for minimal friction is biometric logins via webauthn or using a third party authenticator application. The idea is that users will be satisfied that they do not have to remember passwords of any kind. Because after all, the pitfalls of authentication is inherently a human problem. Humans are not meant to remember passwords. 

The conclusion was that their current offerings are more than accomodating. Zoom has lost all of its market share in the Netherlands after the pandemic ended. Apple ID authentication is in general the most difficult to implement, and not very much used. Furthermore, the feature that apple allows users to hide their actual email, is not desirable for a company that wants to provide closer customer service; they would like to email or even call potential customers to provide extra user assistance. 

Microsoft and Google as providers have been well thought out due to their prevalence in the corporate world. Custom SSO providers are pretty common in the corporate world as well and as such it was researched but the conclusion was that NS users are not aware of it.