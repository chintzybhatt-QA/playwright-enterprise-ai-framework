# 📌 Commit Guidelines

This project strictly adheres to the **Conventional Commits** specification. 

### 💡 Why follow this?
* **Scannable History:** Instantly understand what changed from the Git log.
* **Cleaner PRs:** Keeps code reviews focused on a single, logical change.
* **Industry Standard:** Demonstrates enterprise-level engineering practices to recruiters.
* **Automation Ready:** Seamlessly integrates with tools for semantic versioning and release notes.

---

## 🏗️ Commit Message Format

```text
<type>(<scope>): <short description in imperative mood>
```

> ⚙️ *The `<scope>` is optional but highly recommended to specify the area of the framework being changed (e.g., `login`, `core`, `api`).*

---

## 🎨 Commit Types

| Type | Purpose | Example |
| :--- | :--- | :--- |
| **`feat`** | A new feature or framework capability | `feat(core): implement BasePage` |
| **`fix`** | Bug fixes or resolving failing tests | `fix(login): resolve flaky login test` |
| **`refactor`** | Code improvements without changing behavior | `refactor(core): simplify page interactions` |
| **`test`** | Adding or improving test cases | `test(login): add successful login scenarios` |
| **`docs`** | Documentation updates only | `docs: update README` |
| **`ci`** | CI/CD configurations and pipeline changes | `ci: add GitHub Actions workflow` |
| **`chore`** | Maintenance tasks and configuration setup | `chore: initialize project` |

---

## 🚦 Examples Gallery

### ✅ Professional Examples
```text
feat(auth): implement login page
feat(config): add environment loader
feat(reporting): integrate Allure reports
feat(logger): add Winston logger
feat(api): implement API client
feat(ai): add AI planner
fix(login): handle expired session
refactor(page): extract reusable component
docs: update framework architecture
test(admin): add employee creation tests
ci: configure GitHub Actions
```

### ❌ Bad Examples (Avoid)
```text
update code
bug fix
changes
final
latest
new
testing
temp
asdf
```

---

## 📜 Core Rules

* **Atomic Commits:** Keep commits small, isolated, and focused on one logical change.
* **Imperative Voice:** Write descriptions as if commanding the codebase (e.g., use `add` instead of `added` or `adds`).
* **Length Limit:** Keep the entire description line **under 72 characters**.
* **Lower Case:** Always write the `<type>` and `<scope>` in lowercase.
