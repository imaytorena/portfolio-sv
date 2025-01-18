<script lang="ts">
    // import Fa from 'svelte-fa';
    // import {faStar} from '@fortawesome/free-solid-svg-icons';

    let name = '';
    let email = '';
    let message = '';
    let terms_conditions = false;
    let contacted = false;
    let turnstile_token = '';
    let hoverRating = 0;

    async function handleSubmit(e: Event) {
        e.preventDefault();
        const new_token = turnstile?.getResponse("#turnstile-container");
        const response = await fetch(import.meta.env.VITE_VALIDATION_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'cf-turnstile-token': new_token
            },
            body: JSON.stringify({name, email, message, terms_conditions, contacted})
        });
        name = '';
        email = '';
        message = '';
    }

    $: isFormValid = name && email && message && terms_conditions && turnstile_token;

    const widgetId = turnstile?.ready(function () {
        turnstile.render("#turnstile-container", {
            sitekey: import.meta.env.VITE_TURNSTILE_KEY,
            callback: function (token) {
                console.log(token);
                turnstile_token = token;
            },
        });
    });
    console.log(widgetId);
</script>

<div class="section contact-section">
    <h2 class="gradient-text" style="max-width: 600px; margin: 2rem auto;">DM me</h2>
    <form on:submit={handleSubmit} class="contact-form">
        <div class="form-group">
            <label for="name">Name</label>
            <input
                    type="text"
                    id="name"
                    bind:value={name}
                    required
                    placeholder="Your Name"
            />
        </div>

        <div class="form-group">
            <label for="email">Email</label>
            <input
                    type="email"
                    id="email"
                    bind:value={email}
                    required
                    placeholder="your@email.com"
            />
        </div>

        <div class="form-group">
            <label for="message">Message</label>
            <textarea
                    id="message"
                    bind:value={message}
                    required
                    placeholder="Your message here..."
                    rows="4"
            ></textarea>
        </div>
        <div class="bottom-group">
            <div style="display: flex; flex-direction: column; align-items: flex-start;">

                <label class="check-agreement-group" for="terms_conditions">
                    <input id="terms_conditions"
                           type="checkbox"
                           bind:value={terms_conditions}
                           required
                           checked={terms_conditions}/>
                    I agree to the <a href="/terms-conditions">terms and conditions</a>
                </label>

                <label class="check-agreement-group" for="contact_me">
                    <input id="contact_me"
                           type="checkbox"
                           bind:value={contacted}
                           checked={contacted}/>
                    I agree to be contacted by email
                </label>
            </div>
            <div
                    id="turnstile-container"
                    class="turnstile-container"

                    data-sitekey={import.meta.env.VITE_TURNSTILE_KEY}
                    data-callback="javascriptCallback"
            ></div>
        </div>
        <button type="submit" class="submit-btn" disabled={!isFormValid}>
            Enviar mensaje
        </button>
    </form>
</div>

<style>
    .contact-section {
        background: linear-gradient(135deg, rgba(70, 53, 177, 0.05), rgba(183, 113, 229, 0.05));
    }

    .contact-form {
        max-width: 600px;
        margin: 2rem auto;
    }

    .form-group {
        margin-bottom: 1.5rem;
    }

    label {
        display: block;
        margin-bottom: 0.5rem;
        color: var(--text);
        font-weight: 500;
    }

    input, textarea {
        width: 100%;
        padding: 0.75rem;
        border: 2px solid rgba(70, 53, 177, 0.1);
        border-radius: 0.5rem;
        background: white;
        transition: all 0.3s ease;
    }

    input:focus, textarea:focus {
        outline: none;
        border-color: var(--primary);
        box-shadow: 0 0 0 3px rgba(70, 53, 177, 0.1);
    }

    .submit-btn {
        width: 100%;
        padding: 1rem;
        background: var(--primary);
        color: white;
        border: none;
        border-radius: 0.5rem;
        font-size: 1rem;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.3s ease;
    }

    .submit-btn:hover:not(:disabled) {
        background: var(--secondary);
        transform: translateY(-2px);
    }

    .submit-btn:disabled {
        opacity: 0.7;
        cursor: not-allowed;
    }

    .bottom-group {
        display: flex;
        flex-direction: row;
        gap: 1rem;
        flex-wrap: wrap;
        justify-content: center;
        margin-bottom: 1.5rem;
    }

    .turnstile-container {
        display: flex;
        justify-content: center;
    }

    .check-agreement-group {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: .5rem;
    }

    .check-agreement-group input {
        width: min-content;
    }
</style>