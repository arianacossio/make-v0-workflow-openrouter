# 🚀 Quick Start Guide - Liquid Glass Form

## Get Started in 3 Steps

### 1️⃣ Install Dependencies
The dependencies (including `framer-motion`) are automatically installed when you save. No manual installation needed!

### 2️⃣ Start Development Server
```bash
pnpm dev
```

### 3️⃣ View the Form
Open your browser to: **http://localhost:3000**

## ✅ What You Get

A fully-functional marketing request form with:

- 🎨 **Liquid Glass UI** - Premium frosted glass design with animations
- 📝 **Smart Form Logic** - Different fields appear based on your selection
- 🌐 **Webhook Ready** - Submissions stored and ready to integrate
- 🧪 **Debug Console** - Built-in testing tool (click settings icon)
- 🌍 **100% Spanish** - All text in Spanish (es)
- 📱 **Mobile Optimized** - Works perfectly on all devices

## 🎯 Form Workflow

1. **Enter Your Name** - Required field
2. **Pick Your Department/Area** - 6 options available
3. **Fill Area-Specific Fields** - Different fields appear for each area
4. **Submit** - See success animation with reference number

## 🔗 Webhook Integration

### Default: Built-in Storage
Submissions are received by `/api/webhook` and logged to the console.

### Advanced: External Webhook
To send to your own server:

1. Create `.env.local` file in project root:
```
NEXT_PUBLIC_WEBHOOK_URL=https://your-webhook-url.com/webhook
```

2. Restart development server

3. Submissions now go to both the internal API and your external URL

## 🧪 Test with Debug Console

1. Click the **purple settings icon** in bottom-right
2. Fill out any form fields
3. See real-time JSON preview
4. Click "Reenviar a Webhook" to test submission
5. Click the X to close

## 📊 Form Areas

| Area | Special Fields |
|------|----------------|
| **Orgánico** | Platforms, Format, Tone |
| **Ideas de Video** | Platforms, Format, Tone |
| **Trend** | Link, Brand Connection, Platforms, Urgency |
| **Paid Media** | Campaign Objective, Communication Goal, Offer Details |
| **Email Marketing** | Email Subject, Objective |
| **Otro/General** | Deliverable Type, Format Specs, References |

## 💡 Tips

- **Mobile Testing**: Use Chrome DevTools device emulation
- **Debug Mode**: Always keep Debug Console open during development
- **Validation**: Form won't submit until all required fields are filled
- **Dates**: Date picker disables past dates automatically
- **Webhooks**: Check console logs for submission details

## 🎨 Customize Colors

Edit `/app/globals.css` `:root` section to change:
- Primary color (purple)
- Accent color (pink)
- Background darkness

## 📚 Full Documentation

See `LIQUID_GLASS_FORM_README.md` for:
- Detailed feature list
- Integration guides
- Customization options
- Troubleshooting
- File structure
- Accessibility info

## 🆘 Common Issues

**"Styles not loading?"**
→ Clear browser cache (Ctrl+Shift+Del)

**"Form fields not appearing?"**
→ Check browser console (F12) for errors

**"Webhook not working?"**
→ Open Debug Console to see submission details

**"Date picker not showing?"**
→ Click the calendar icon next to date field

## 🎓 What's Included

```
✅ React Hook Form + Zod validation
✅ Framer Motion animations
✅ Lucide React icons
✅ Tailwind CSS responsive design
✅ API route for webhooks
✅ Debug console for testing
✅ Success modal with animations
✅ Mobile-first responsive layout
✅ Spanish language throughout
✅ Production-ready code
```

## 🚀 Next Steps

1. ✅ Run `pnpm dev`
2. ✅ View the form at http://localhost:3000
3. ✅ Try filling it out
4. ✅ Open Debug Console to see data
5. ✅ Configure external webhook in `.env.local` if needed

---

**Questions?** Check the full README or explore the components in `/app/components/`
