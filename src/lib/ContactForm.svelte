<script lang="ts">
    // import Fa from 'svelte-fa';
    // import {faStar} from '@fortawesome/free-solid-svg-icons';
    import {showToast} from './external/toast';

    let name = '';
    let email = '';
    let message = '';
    let terms_conditions = false;
    let contacted = true;
    let turnstile_token = '';
    let alreadyUsed = false;

    async function handleSubmit(e: Event) {
        e.preventDefault();

        try {
            const new_token = turnstile?.getResponse("#turnstile-container");
            const source = await fetch(import.meta.env.VITE_VALIDATION_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'cf-turnstile-token': new_token
                },
                body: JSON.stringify({name, email, message, terms_conditions, contacted})
            });
            const response = await source.json();
            console.log(source);
            showToast(response?.message || `Message ${!source.ok ? 'was not ' : ''}sent successfully`, source.ok ? 'success' : 'error');
            name = '';
            email = '';
            message = '';
            alreadyUsed = true;
        } catch (error) {
            showToast(error?.message || 'Something went wrong');
        }
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
    <h2 class="gradient-text" style="max-width: 700px; margin: 2rem auto;">If you'd like to sent me a message</h2>
    <form on:submit={handleSubmit} class="contact-form">
        <div class="form-group">
            <label for="name">Contact name</label>
            <input
                    type="text"
                    id="name"
                    bind:value={name}
                    required
                    disabled={alreadyUsed}
                    placeholder="First name + Last name"
            />
        </div>

        <div class="form-group">
            <label for="email">Email address</label>
            <input
                    type="email"
                    id="email"
                    bind:value={email}
                    required
                    disabled={alreadyUsed}
                    placeholder="your@email.com"
            />
        </div>

        <div class="form-group">
            <label for="message">Message</label>
            <textarea
                    id="message"
                    bind:value={message}
                    required
                    disabled={alreadyUsed}
                    placeholder="Your message here..."
                    rows="4"
            ></textarea>
        </div>
        <div class="form-group">
            <p style="margin: 1rem 0; font-size: medium; font-style: italic">
                {#if alreadyUsed}
                    <span style="color: var(--primary);">
                        Thanks for the message, i'll be answering you via email.<br/>
                        <b>Please consider that this is a direct message service, so avoid spam</b>
                    </span>
                {:else}
                    <span></span>
                    If everything is good, i'll check your message asap
                {/if}
            </p>
        </div>

        <div class="bottom-group">
            <div class="checkboxes">
                <label class="check-agreement-group" for="terms_conditions">
                    <input id="terms_conditions"
                           type="checkbox"
                           bind:value={terms_conditions}
                           required
                           disabled={alreadyUsed}
                           checked={terms_conditions}/>
                    <span>I agree to the <a href="/documents/terms-conditions.pdf">terms and conditions</a></span>
                </label>

                <label class="check-agreement-group" for="contact_me">
                    <input id="contact_me"
                           type="checkbox"
                           disabled={alreadyUsed}
                           bind:value={contacted}
                           checked={contacted}/>
                    I'm ok being contacted by email
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
            Send message
        </button>
    </form>
</div>

<style>
    .contact-section {
        background: linear-gradient(135deg, rgba(70, 53, 177, 0.05), rgba(183, 113, 229, 0.05));
    }

    .contact-form {
        max-width: 700px;
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
        justify-content: space-around;
        align-items: center;
        margin-bottom: 1.5rem;
        font-size: 1.2rem;
    }

    @media (max-width: 640px) {
        .bottom-group {
            flex-wrap: wrap;
        }
    }


    .turnstile-container {
        display: flex;
        justify-content: center;
    }

    @media (max-width: 400px) {
        .turnstile-container {
            overflow: auto;
        }
    }

    .check-agreement-group {
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: 'Inter', sans-serif;
        gap: 1rem;
    }

    .checkboxes {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }


    .check-agreement-group input {
        width: min-content;
        transform: scale(1.3);
        font-size: 1.5rem;
        margin-bottom: 4px;
    }
</style>